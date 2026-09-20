import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { prisma } from "../../config/prisma.js";
const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
    throw new Error("JWT_SECRET is not configured");
}
const JWT_SECRET = jwtSecret;
const JWT_EXPIRES_IN_SECONDS = 7 * 24 * 60 * 60;
function createToken(user) {
    return jwt.sign({
        sub: user.id,
        email: user.email,
        role: user.role,
    }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN_SECONDS,
    });
}
function toAuthUser(user) {
    return {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        role: user.role,
        isActive: user.isActive,
        ieeeMembershipNumber: user.ieeeMembershipNumber,
    };
}
export async function signup(input) {
    const email = input.email.toLowerCase();
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (existingUser) {
        throw new Error("An account with this email already exists");
    }
    const existingMembership = await prisma.user.findUnique({
        where: {
            ieeeMembershipNumber: input.ieeeMembershipNumber,
        },
    });
    if (existingMembership) {
        throw new Error("This IEEE Membership Number is already registered");
    }
    const passwordHash = await argon2.hash(input.password);
    const user = await prisma.$transaction(async (tx) => {
        const createdUser = await tx.user.create({
            data: {
                email,
                password: passwordHash,
                firstName: input.firstName,
                lastName: input.lastName ?? null,
                phone: input.phone,
                role: "STUDENT",
                ieeeMembershipNumber: input.ieeeMembershipNumber,
            },
        });
        await tx.memberProfile.create({
            data: {
                userId: createdUser.id,
                membershipStatus: "PENDING",
                department: input.department,
                course: input.course,
                year: input.year,
                rollNumber: input.rollNumber,
            },
        });
        return createdUser;
    });
    const authUser = toAuthUser(user);
    return {
        user: authUser,
        token: createToken(authUser),
    };
}
export async function login(input) {
    const email = input.email.toLowerCase();
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) {
        throw new Error("Invalid email or password");
    }
    if (!user.isActive) {
        throw new Error("This account is inactive");
    }
    const passwordValid = await argon2.verify(user.password, input.password);
    if (!passwordValid) {
        throw new Error("Invalid email or password");
    }
    const authUser = toAuthUser(user);
    return {
        user: authUser,
        token: createToken(authUser),
    };
}
export async function getCurrentUser(userId) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    if (!user.isActive) {
        throw new Error("This account is inactive");
    }
    return toAuthUser(user);
}
//# sourceMappingURL=auth.service.js.map