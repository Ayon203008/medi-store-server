/*
  Warnings:

  - The primary key for the `Categories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Medicines` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `totalPrice` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `comment` on the `Reviews` table. All the data in the column will be lost.
  - You are about to alter the column `rating` on the `Reviews` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - A unique constraint covering the columns `[name]` on the table `Categories` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Category_id` to the `Medicines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Seller_id` to the `Medicines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Medicines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Customer_id` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TotalPrice` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentMethod` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `Orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `commnet` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_id` to the `Reviews` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medicine_id` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'SELLER', 'CUSTOMER');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PROCESSING', 'SHIPPED', 'CANCELLED', 'DELIVERED');

-- AlterTable
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "description" DROP NOT NULL,
ADD CONSTRAINT "Categories_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Medicines" DROP CONSTRAINT "Medicines_pkey",
ADD COLUMN     "Category_id" TEXT NOT NULL,
ADD COLUMN     "Seller_id" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "image" DROP NOT NULL,
ADD CONSTRAINT "Medicines_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "totalPrice",
ADD COLUMN     "Customer_id" TEXT NOT NULL,
ADD COLUMN     "TotalPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "paymentMethod" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "OrderStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Reviews" DROP COLUMN "comment",
ADD COLUMN     "commnet" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "customer_id" TEXT NOT NULL,
ADD COLUMN     "medicine_id" TEXT NOT NULL,
ALTER COLUMN "rating" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'CUSTOMER';

-- DropEnum
DROP TYPE "Status";

-- CreateTable
CREATE TABLE "Orders_Medicines" (
    "id" TEXT NOT NULL,
    "medicine_id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "seller_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Orders_Medicines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_key" ON "Categories"("name");

-- AddForeignKey
ALTER TABLE "Medicines" ADD CONSTRAINT "Medicines_Category_id_fkey" FOREIGN KEY ("Category_id") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medicines" ADD CONSTRAINT "Medicines_Seller_id_fkey" FOREIGN KEY ("Seller_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_Customer_id_fkey" FOREIGN KEY ("Customer_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_medicine_id_fkey" FOREIGN KEY ("medicine_id") REFERENCES "Medicines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders_Medicines" ADD CONSTRAINT "Orders_Medicines_medicine_id_fkey" FOREIGN KEY ("medicine_id") REFERENCES "Medicines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders_Medicines" ADD CONSTRAINT "Orders_Medicines_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders_Medicines" ADD CONSTRAINT "Orders_Medicines_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
