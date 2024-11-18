/*
  Warnings:

  - Added the required column `isSubscribed` to the `Waitlist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Waitlist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Waitlist" ADD COLUMN     "dateUnsubscribed" TIMESTAMP(3),
ADD COLUMN     "isSubscribed" BOOLEAN NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL;
