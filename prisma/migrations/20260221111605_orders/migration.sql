/*
  Warnings:

  - You are about to drop the `Orders_Medicines` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Medicine_id` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Seller_id` to the `Orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Orders_Medicines" DROP CONSTRAINT "Orders_Medicines_medicine_id_fkey";

-- DropForeignKey
ALTER TABLE "Orders_Medicines" DROP CONSTRAINT "Orders_Medicines_order_id_fkey";

-- DropForeignKey
ALTER TABLE "Orders_Medicines" DROP CONSTRAINT "Orders_Medicines_seller_id_fkey";

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "Medicine_id" TEXT NOT NULL,
ADD COLUMN     "Seller_id" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Orders_Medicines";

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_Seller_id_fkey" FOREIGN KEY ("Seller_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_Medicine_id_fkey" FOREIGN KEY ("Medicine_id") REFERENCES "Medicines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
