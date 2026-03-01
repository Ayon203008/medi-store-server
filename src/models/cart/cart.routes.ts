import { Router } from "express";
import { cartController } from "./cart.controler";
import AuthMiddleware, { Role } from "../../middleware/auth.middleware";

const router = Router()

router.post("/", AuthMiddleware(Role.CUSTOMER), cartController.addtoCart)

router.get("/", AuthMiddleware(Role.CUSTOMER), cartController.getALlCart)                   

router.delete("/:id", AuthMiddleware(Role.CUSTOMER), cartController.deleteCart)


export const cartRouter: Router = router