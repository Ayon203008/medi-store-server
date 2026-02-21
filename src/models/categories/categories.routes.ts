import { Router } from "express";
import { CategoriesController } from "./categories.controller";

const router = Router()

router.post("/",CategoriesController.createCategories)

router.get("/",CategoriesController.getCategories)

export const CategoriesRouter: Router = router