-- CreateTable
CREATE TABLE "MaintenanceSettings" (
    "id" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL DEFAULT 'We''ll be back soon',
    "message" TEXT NOT NULL DEFAULT 'The IEEE Geeta University website is temporarily unavailable while we perform maintenance.',
    "updatedById" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MaintenanceSettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "MaintenanceSettings_enabled_idx" ON "MaintenanceSettings"("enabled");

-- AddForeignKey
ALTER TABLE "MaintenanceSettings" ADD CONSTRAINT "MaintenanceSettings_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
