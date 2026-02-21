import { Router } from "express";
import { CategoriesController } from "./categories.controller";
import AuthMiddleware, { Role } from "../../middleware/auth.middleware";

const router = Router()

router.post("/",CategoriesController.createCategories)

router.get("/",CategoriesController.getCategories)

export const CategoriesRouter: Router = router