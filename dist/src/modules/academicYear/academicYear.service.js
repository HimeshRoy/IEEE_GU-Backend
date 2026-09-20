import { prisma } from "../../config/prisma.js";
export async function getAcademicYears() {
    return prisma.academicYear.findMany({
        orderBy: {
            startDate: "desc",
        },
        include: {
            _count: {
                select: {
                    leadershipPositions: true,
                },
            },
        },
    });
}
export async function getAcademicYearById(id) {
    const academicYear = await prisma.academicYear.findUnique({
        where: {
            id,
        },
        include: {
            _count: {
                select: {
                    leadershipPositions: true,
                },
            },
        },
    });
    if (!academicYear) {
        throw new Error("Academic year not found");
    }
    return academicYear;
}
export async function createAcademicYear(data) {
    const existing = await prisma.academicYear.findUnique({
        where: {
            name: data.name,
        },
    });
    if (existing) {
        throw new Error("An academic year with this name already exists");
    }
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);
    if (data.isCurrent) {
        await prisma.academicYear.updateMany({
            where: {
                isCurrent: true,
            },
            data: {
                isCurrent: false,
            },
        });
    }
    return prisma.academicYear.create({
        data: {
            name: data.name,
            startDate,
            endDate,
            isCurrent: data.isCurrent ?? false,
        },
        include: {
            _count: {
                select: {
                    leadershipPositions: true,
                },
            },
        },
    });
}
export async function updateAcademicYear(id, data) {
    const existing = await prisma.academicYear.findUnique({
        where: {
            id,
        },
    });
    if (!existing) {
        throw new Error("Academic year not found");
    }
    if (data.name && data.name !== existing.name) {
        const duplicate = await prisma.academicYear.findUnique({
            where: {
                name: data.name,
            },
        });
        if (duplicate) {
            throw new Error("An academic year with this name already exists");
        }
    }
    const startDate = data.startDate
        ? new Date(data.startDate)
        : existing.startDate;
    const endDate = data.endDate
        ? new Date(data.endDate)
        : existing.endDate;
    if (endDate.getTime() <= startDate.getTime()) {
        throw new Error("End date must be after start date");
    }
    if (data.isCurrent) {
        await prisma.academicYear.updateMany({
            where: {
                id: {
                    not: id,
                },
                isCurrent: true,
            },
            data: {
                isCurrent: false,
            },
        });
    }
    return prisma.academicYear.update({
        where: {
            id,
        },
        data: {
            ...(data.name !== undefined
                ? { name: data.name }
                : {}),
            ...(data.startDate !== undefined
                ? { startDate }
                : {}),
            ...(data.endDate !== undefined
                ? { endDate }
                : {}),
            ...(data.isCurrent !== undefined
                ? { isCurrent: data.isCurrent }
                : {}),
        },
        include: {
            _count: {
                select: {
                    leadershipPositions: true,
                },
            },
        },
    });
}
//# sourceMappingURL=academicYear.service.js.map