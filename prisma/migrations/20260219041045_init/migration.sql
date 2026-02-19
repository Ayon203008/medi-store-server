-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'SHIPPED', 'DELIVERED');

-- CreateTable
CREATE TABLE "Categories" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medicines" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Medicines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "shippingAddress" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);
