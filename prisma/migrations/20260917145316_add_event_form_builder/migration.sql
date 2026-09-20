/*
  Warnings:

  - A unique constraint covering the columns `[qrToken]` on the table `EventRegistration` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "EventRegistrationTemplate" AS ENUM ('UNIVERSITY_INDIVIDUAL', 'UNIVERSITY_TEAM', 'INTER_UNIVERSITY_INDIVIDUAL', 'INTER_UNIVERSITY_TEAM', 'PUBLIC_INDIVIDUAL', 'PUBLIC_TEAM', 'CUSTOM');

-- CreateEnum
CREATE TYPE "EventParticipationType" AS ENUM ('INDIVIDUAL', 'TEAM');

-- CreateEnum
CREATE TYPE "EventFormStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'CLOSED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "EventFormFieldType" AS ENUM ('SHORT_ANSWER', 'PARAGRAPH', 'EMAIL', 'PHONE', 'NUMBER', 'MULTIPLE_CHOICE', 'CHECKBOXES', 'DROPDOWN', 'DATE', 'TIME', 'FILE_UPLOAD', 'IMAGE_UPLOAD');

-- CreateEnum
CREATE TYPE "EventFormFieldScope" AS ENUM ('PARTICIPANT', 'TEAM');

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "maxTeamSize" INTEGER,
ADD COLUMN     "minTeamSize" INTEGER,
ADD COLUMN     "participationType" "EventParticipationType" NOT NULL DEFAULT 'INDIVIDUAL',
ADD COLUMN     "registrationTemplate" "EventRegistrationTemplate";

-- AlterTable
ALTER TABLE "EventRegistration" ADD COLUMN     "isTeamLeader" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "qrToken" TEXT,
ADD COLUMN     "teamId" TEXT;

-- CreateTable
CREATE TABLE "EventForm" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "template" "EventRegistrationTemplate",
    "status" "EventFormStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventFormField" (
    "id" TEXT NOT NULL,
    "formId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "description" TEXT,
    "type" "EventFormFieldType" NOT NULL,
    "scope" "EventFormFieldScope" NOT NULL DEFAULT 'PARTICIPANT',
    "required" BOOLEAN NOT NULL DEFAULT false,
    "placeholder" TEXT,
    "options" JSONB,
    "validation" JSONB,
    "order" INTEGER NOT NULL,
    "isSystemField" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventFormField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventFormResponse" (
    "id" TEXT NOT NULL,
    "formId" TEXT NOT NULL,
    "registrationId" TEXT NOT NULL,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventFormResponse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventFormAnswer" (
    "id" TEXT NOT NULL,
    "responseId" TEXT NOT NULL,
    "fieldId" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventFormAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventTeam" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EventTeam_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventForm_eventId_key" ON "EventForm"("eventId");

-- CreateIndex
CREATE INDEX "EventFormField_formId_order_idx" ON "EventFormField"("formId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "EventFormField_formId_key_key" ON "EventFormField"("formId", "key");

-- CreateIndex
CREATE UNIQUE INDEX "EventFormResponse_registrationId_key" ON "EventFormResponse"("registrationId");

-- CreateIndex
CREATE INDEX "EventFormResponse_formId_idx" ON "EventFormResponse"("formId");

-- CreateIndex
CREATE INDEX "EventFormResponse_submittedAt_idx" ON "EventFormResponse"("submittedAt");

-- CreateIndex
CREATE INDEX "EventFormAnswer_fieldId_idx" ON "EventFormAnswer"("fieldId");

-- CreateIndex
CREATE UNIQUE INDEX "EventFormAnswer_responseId_fieldId_key" ON "EventFormAnswer"("responseId", "fieldId");

-- CreateIndex
CREATE INDEX "EventTeam_eventId_idx" ON "EventTeam"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "EventTeam_eventId_name_key" ON "EventTeam"("eventId", "name");

-- CreateIndex
CREATE INDEX "Event_registrationTemplate_idx" ON "Event"("registrationTemplate");

-- CreateIndex
CREATE UNIQUE INDEX "EventRegistration_qrToken_key" ON "EventRegistration"("qrToken");

-- CreateIndex
CREATE INDEX "EventRegistration_teamId_idx" ON "EventRegistration"("teamId");

-- CreateIndex
CREATE INDEX "EventRegistration_registrationStatus_idx" ON "EventRegistration"("registrationStatus");

-- AddForeignKey
ALTER TABLE "EventRegistration" ADD CONSTRAINT "EventRegistration_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "EventTeam"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventForm" ADD CONSTRAINT "EventForm_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventFormField" ADD CONSTRAINT "EventFormField_formId_fkey" FOREIGN KEY ("formId") REFERENCES "EventForm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventFormResponse" ADD CONSTRAINT "EventFormResponse_formId_fkey" FOREIGN KEY ("formId") REFERENCES "EventForm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventFormResponse" ADD CONSTRAINT "EventFormResponse_registrationId_fkey" FOREIGN KEY ("registrationId") REFERENCES "EventRegistration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventFormAnswer" ADD CONSTRAINT "EventFormAnswer_responseId_fkey" FOREIGN KEY ("responseId") REFERENCES "EventFormResponse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventFormAnswer" ADD CONSTRAINT "EventFormAnswer_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "EventFormField"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventTeam" ADD CONSTRAINT "EventTeam_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
