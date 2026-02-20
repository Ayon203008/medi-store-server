import { Router } from "express";
import { CategoriesController } from "./categories.controller";

const router = Router()

router.post("/categories",CategoriesController.createCategories)

router.get("/categories",CategoriesController.getCategories)

export const CategoriesRouter: Router = router