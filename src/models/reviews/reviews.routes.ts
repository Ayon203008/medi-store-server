import { Router } from "express";
import { ReviewsController } from "./reviews.controller";

const  router:Router = Router()

router.post("/",ReviewsController.createReview)

router.put("/:id",ReviewsController.updateReview)

router.delete("/:id",ReviewsController.deleteReview)

export const ReviewsRouter = router