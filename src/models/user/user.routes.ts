import { Router } from "express";
import { UserController } from "./user.controller";
import AuthMiddleware, { Role } from "../../middleware/auth.middleware";

const router:Router=Router()

router.put("/:id",AuthMiddleware(Role.ADMIN),UserController.updateUser)

router.get("/",AuthMiddleware(Role.ADMIN),UserController.getAllUser)

export const UserRouter = router

