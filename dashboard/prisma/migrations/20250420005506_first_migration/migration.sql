-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('active', 'inactive', 'archived');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" "ProductStatus" NOT NULL DEFAULT 'active',
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "availableAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
