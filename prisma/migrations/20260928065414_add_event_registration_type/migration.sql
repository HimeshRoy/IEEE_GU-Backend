-- CreateEnum
CREATE TYPE "EventRegistrationType" AS ENUM ('INTERNAL', 'EXTERNAL');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "externalRegistrationUrl" TEXT,
ADD COLUMN     "registrationType" "EventRegistrationType" NOT NULL DEFAULT 'INTERNAL';
