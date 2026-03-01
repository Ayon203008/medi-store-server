// * post orders
// * get orders by id
// * get all orders

import { Router } from "express";
import { orderController } from "./orders.controller";
import AuthMiddleware, { Role } from "../../middleware/auth.middleware";

const router=Router()

router.post("/",AuthMiddleware(Role.CUSTOMER),orderController.createOrders)

router.get("/customer",AuthMiddleware(Role.CUSTOMER),orderController.getCustomerOrders)

router.get("/seller",AuthMiddleware(Role.SELLER),orderController.getSellerOrders)
router.get("/admin",AuthMiddleware(Role.ADMIN),orderController.getAllOrders)

router.patch("/:id",AuthMiddleware(Role.SELLER),orderController.updateOrders)

router.get("/:id",orderController.getOrdersById)




export const OrderRoutes:Router=router