import { Router } from "express";
import { cartController } from "./cart.controler";

const router=Router()

router.post("/",cartController.addtoCart)                           


export const cartRouter:Router=router