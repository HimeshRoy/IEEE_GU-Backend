/*
  Warnings:

  - You are about to drop the column `ieeeMembershipNumber` on the `MemberProfile` table. All the data in the column will be lost.
  - You are about to drop the column `membershipId` on the `MemberProfile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ieeeMembershipNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "MemberProfile_membershipId_key";

-- AlterTable
ALTER TABLE "MemberProfile" DROP COLUMN "ieeeMembershipNumber",
DROP COLUMN "membershipId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "ieeeMembershipNumber" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_ieeeMembershipNumber_key" ON "User"("ieeeMembershipNumber");
