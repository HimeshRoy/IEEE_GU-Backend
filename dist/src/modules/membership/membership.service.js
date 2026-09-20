import { prisma } from "../../config/prisma.js";
import { createNotification } from "../notifications/notifications.service.js";
export async function getMyMembership(userId) {
    const memberProfile = await prisma.memberProfile.findUnique({
        where: {
            userId,
        },
        include: {
            user: {
                select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    phone: true,
                    ieeeMembershipNumber: true,
                },
            },
        },
    });
    if (!memberProfile) {
        throw new Error("Membership profile not found");
    }
    return memberProfile;
}
export async function getPendingMemberships() {
    return prisma.memberProfile.findMany({
        where: {
            membershipStatus: "PENDING",
        },
        include: {
            user: {
                select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    phone: true,
                    ieeeMembershipNumber: true,
                },
            },
        },
        orderBy: {
            createdAt: "asc",
        },
    });
}
export async function approveMembership(memberProfileId, approverId) {
    const memberProfile = await prisma.memberProfile.findUnique({
        where: {
            id: memberProfileId,
        },
    });
    if (!memberProfile) {
        throw new Error("Membership application not found");
    }
    if (memberProfile.membershipStatus !== "PENDING") {
        throw new Error("Only pending memberships can be approved");
    }
    const updatedMembership = await prisma.memberProfile.update({
        where: {
            id: memberProfileId,
        },
        data: {
            membershipStatus: "ACTIVE",
            approvedById: approverId,
            approvedAt: new Date(),
            rejectionReason: null,
            joinedAt: new Date(),
        },
    });
    await createNotification({
        userId: updatedMembership.userId,
        title: "Membership Approved",
        message: "Your IEEE GU Student Branch membership has been approved.",
        type: "MEMBERSHIP",
    });
    return updatedMembership;
}
export async function rejectMembership(memberProfileId, approverId, rejectionReason) {
    const memberProfile = await prisma.memberProfile.findUnique({
        where: {
            id: memberProfileId,
        },
    });
    if (!memberProfile) {
        throw new Error("Membership application not found");
    }
    if (memberProfile.membershipStatus !== "PENDING") {
        throw new Error("Only pending memberships can be rejected");
    }
    const updatedMembership = await prisma.memberProfile.update({
        where: {
            id: memberProfileId,
        },
        data: {
            membershipStatus: "REJECTED",
            approvedById: approverId,
            approvedAt: new Date(),
            rejectionReason,
        },
    });
    await createNotification({
        userId: updatedMembership.userId,
        title: "Membership Rejected",
        message: `Your IEEE GU Student Branch membership was rejected. Reason: ${rejectionReason}`,
        type: "MEMBERSHIP",
    });
    return updatedMembership;
}
export async function applyForMembership(userId) {
    const existingMembership = await prisma.memberProfile.findUnique({
        where: {
            userId,
        },
    });
    if (existingMembership) {
        if (existingMembership.membershipStatus ===
            "PENDING") {
            throw new Error("Your IEEE membership application is already pending");
        }
        if (existingMembership.membershipStatus ===
            "ACTIVE") {
            throw new Error("You already have an active IEEE membership");
        }
        if (existingMembership.membershipStatus ===
            "SUSPENDED") {
            throw new Error("Your IEEE membership is currently suspended");
        }
        if (existingMembership.membershipStatus ===
            "EXPIRED") {
            throw new Error("Your IEEE membership has expired");
        }
        if (existingMembership.membershipStatus ===
            "REJECTED") {
            throw new Error("Your previous IEEE membership application was rejected. Please contact the branch administration.");
        }
        throw new Error("A membership profile already exists for this account");
    }
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            id: true,
            isActive: true,
        },
    });
    if (!user) {
        throw new Error("User account not found");
    }
    if (!user.isActive) {
        throw new Error("This account is inactive");
    }
    const memberProfile = await prisma.memberProfile.create({
        data: {
            userId,
            membershipStatus: "PENDING",
        },
    });
    await prisma.auditLog.create({
        data: {
            userId,
            action: "CREATE",
            entityType: "MEMBERSHIP",
            entityId: memberProfile.id,
            description: "Submitted an IEEE GU Student Branch membership application",
        },
    });
    return memberProfile;
}
//# sourceMappingURL=membership.service.js.map