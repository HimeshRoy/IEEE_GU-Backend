import crypto from "node:crypto";
import argon2 from "argon2";
import { prisma } from "../../config/prisma.js";
function verifySetupSecret(providedSecret, configuredSecret) {
    const provided = Buffer.from(providedSecret, "utf8");
    const configured = Buffer.from(configuredSecret, "utf8");
    if (provided.length !== configured.length) {
        return false;
    }
    return crypto.timingSafeEqual(provided, configured);
}
export async function createInitialWebmaster(input) {
    const configuredSecret = process.env.INITIAL_SETUP_SECRET;
    if (!configuredSecret) {
        throw new Error("Initial setup is not configured on this server");
    }
    if (!verifySetupSecret(input.setupSecret, configuredSecret)) {
        throw new Error("Invalid setup secret");
    }
    const existingWebmaster = await prisma.user.findFirst({
        where: {
            role: "WEBMASTER",
        },
        select: {
            id: true,
        },
    });
    if (existingWebmaster) {
        throw new Error("Initial setup has already been completed");
    }
    const email = input.email.toLowerCase();
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
        select: {
            id: true,
        },
    });
    if (existingUser) {
        throw new Error("An account with this email already exists");
    }
    if (input.academicYear.endDate <=
        input.academicYear.startDate) {
        throw new Error("Academic year end date must be after start date");
    }
    const existingAcademicYear = await prisma.academicYear.findUnique({
        where: {
            name: input.academicYear.name,
        },
        select: {
            id: true,
        },
    });
    if (existingAcademicYear) {
        throw new Error("An academic year with this name already exists");
    }
    const passwordHash = await argon2.hash(input.password);
    const result = await prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
            data: {
                email,
                password: passwordHash,
                firstName: input.firstName,
                lastName: input.lastName ?? null,
                phone: input.phone ?? null,
                role: "WEBMASTER",
                isActive: true,
            },
        });
        const academicYear = await tx.academicYear.create({
            data: {
                name: input.academicYear.name,
                startDate: input.academicYear.startDate,
                endDate: input.academicYear.endDate,
                isCurrent: true,
            },
        });
        const leadership = await tx.branchLeadership.create({
            data: {
                userId: user.id,
                position: "WEBMASTER",
                academicYearId: academicYear.id,
                startDate: input.academicYear.startDate,
                endDate: input.academicYear.endDate,
                isCurrent: true,
            },
        });
        await tx.auditLog.create({
            data: {
                userId: user.id,
                action: "CREATE",
                entityType: "INITIAL_SETUP",
                entityId: user.id,
                description: "Initial WEBMASTER account and WEBMASTER leadership position created",
            },
        });
        return {
            user,
            academicYear,
            leadership,
        };
    });
    return {
        user: {
            id: result.user.id,
            email: result.user.email,
            firstName: result.user.firstName,
            lastName: result.user.lastName,
            role: result.user.role,
            isActive: result.user.isActive,
        },
        academicYear: result.academicYear,
        leadership: result.leadership,
    };
}
//# sourceMappingURL=setup.service.js.map