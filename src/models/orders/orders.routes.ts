// * post orders
// * get orders by id
// * get all orders

import { Router } from "express";
import { orderController } from "./orders.controller";

const router=Router()

router.post("/",orderController.createOrders)

router.get("/customer",orderController.getCustomerOrders)

router.get("/seller",orderController.getSellerOrders)

router.get("/",orderController.getAllOrders)

router.get("/:id",orderController.getOrdersById)



export const OrderRoutes:Router=router