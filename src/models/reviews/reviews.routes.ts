import { Router } from "express";
import { ReviewsController } from "./reviews.controller";
import AuthMiddleware, { Role } from "../../middleware/auth.middleware";

const  router:Router = Router()

router.post("/",AuthMiddleware(Role.CUSTOMER),ReviewsController.createReview)

router.get("/:id",ReviewsController.getReviews)

export const ReviewsRouter = router




