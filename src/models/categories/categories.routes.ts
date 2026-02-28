import { Router } from "express";
import { CategoriesController } from "./categories.controller";
import AuthMiddleware, { Role } from "../../middleware/auth.middleware";

const router = Router()

router.post("/",AuthMiddleware(Role.ADMIN),CategoriesController.createCategories)

// * public
router.get("/",CategoriesController.getCategories)

router.patch("/:id",AuthMiddleware(Role.ADMIN),CategoriesController.UpdateCategories)

router.delete("/:id",AuthMiddleware(Role.ADMIN),CategoriesController.deleteCategories)

export const CategoriesRouter: Router = router

