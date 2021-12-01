/*
  Warnings:

  - Added the required column `school` to the `Education` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Certificates" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Education" ADD COLUMN     "school" VARCHAR(255) NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "start_date" DROP NOT NULL,
ALTER COLUMN "end_date" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Languages" ALTER COLUMN "level" DROP NOT NULL;

-- AlterTable
ALTER TABLE "PersonalDetails" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "phone_number" DROP NOT NULL,
ALTER COLUMN "phone_number" DROP DEFAULT,
ALTER COLUMN "phone_number" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "last_name" DROP NOT NULL,
ALTER COLUMN "street" DROP NOT NULL,
ALTER COLUMN "postcode" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "headline" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Skills" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "WorkExperience" ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "start_date" DROP NOT NULL,
ALTER COLUMN "end_date" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
