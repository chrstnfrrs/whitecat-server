/*
  Warnings:

  - Added the required column `weight` to the `Weight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Weight" ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;
