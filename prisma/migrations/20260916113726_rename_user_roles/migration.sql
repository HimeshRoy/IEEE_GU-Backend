BEGIN;

CREATE TYPE "UserRole_new" AS ENUM (
  'STUDENT',
  'FACULTY',
  'FACULTY_ADVISOR',
  'IEEE_COUNSELOR',
  'FACULTY_MEMBER',
  'CHAIRMAN',
  'VICE_CHAIRMAN',
  'JOINT_SECRETARY',
  'WEBMASTER',
  'PHOTOGRAPHER',
  'TREASURER'
);

ALTER TABLE "public"."User"
ALTER COLUMN "role" DROP DEFAULT;

ALTER TABLE "public"."User"
ALTER COLUMN "role" TYPE "UserRole_new"
USING (
  CASE
    WHEN "role"::text = 'HOD' THEN 'IEEE_COUNSELOR'
    WHEN "role"::text = 'WEB_HEAD' THEN 'WEBMASTER'
    ELSE "role"::text
  END::"UserRole_new"
);

ALTER TYPE "UserRole" RENAME TO "UserRole_old";

ALTER TYPE "UserRole_new" RENAME TO "UserRole";

DROP TYPE "public"."UserRole_old";

ALTER TABLE "public"."User"
ALTER COLUMN "role" SET DEFAULT 'STUDENT';

COMMIT;