/*
  Warnings:

  - You are about to drop the column `name` on the `Task` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,ordering]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "description" TEXT,
ADD COLUMN     "ordering" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "name",
ADD COLUMN     "completedAt" TIMESTAMP(3),
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_userId_ordering_key" ON "Category"("userId", "ordering");
