/*
  Warnings:

  - You are about to drop the column `name` on the `SessionFrontEnd` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `SessionFrontEnd` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "SessionFrontEnd" DROP COLUMN "name",
ADD COLUMN     "userId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "SessionFrontEnd_userId_key" ON "SessionFrontEnd"("userId");
