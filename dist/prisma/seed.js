import "dotenv/config";
import argon2 from "argon2";
import { prisma } from "../src/config/prisma.js";
async function main() {
    const passwordHash = await argon2.hash("Faculty@12345");
    const facultyAdvisor = await prisma.user.upsert({
        where: {
            email: "faculty.advisor@ieeegu.edu.in",
        },
        update: {
            firstName: "IEEE",
            lastName: "Counselor",
            phone: "9876543212",
            role: "FACULTY_ADVISOR",
            isActive: true,
            password: passwordHash,
        },
        create: {
            email: "faculty.advisor@ieeegu.edu.in",
            password: passwordHash,
            firstName: "IEEE",
            lastName: "Counselor",
            phone: "9876543212",
            role: "FACULTY_ADVISOR",
            isActive: true,
        },
    });
    console.log("Faculty Advisor account ready:");
    console.log(facultyAdvisor.email);
}
main()
    .catch((error) => {
    console.error("Seed failed:", error);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map