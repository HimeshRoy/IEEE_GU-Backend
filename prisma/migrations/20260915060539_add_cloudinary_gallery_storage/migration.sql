/*
  Warnings:

  - Added the required column `cloudinaryId` to the `GalleryImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GalleryImage" ADD COLUMN     "cloudinaryId" TEXT NOT NULL;
