-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Customer_id" TEXT NOT NULL,
    "Medicine_id" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cart_Customer_id_Medicine_id_key" ON "Cart"("Customer_id", "Medicine_id");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_Customer_id_fkey" FOREIGN KEY ("Customer_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_Medicine_id_fkey" FOREIGN KEY ("Medicine_id") REFERENCES "Medicines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
