import { toNodeHandler } from "better-auth/node";
import express, { Application, Request, Response } from "express";
import { auth } from "./lib/auth";
const app: Application = express();
import cors from "cors";
import { medicineRouter } from "./models/medicine/Medicine.routes";
import { CategoriesRouter } from "./models/categories/categories.routes";
import { OrderRoutes } from "./models/orders/orders.routes";
import { ReviewsRouter } from "./models/reviews/reviews.routes";
import { UserRouter } from "./models/user/user.routes";


app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json()) 
app.use(cors({
    origin: process.env.APP_URL,
    credentials: true
}))

app.use('/api/medicine',medicineRouter)

app.use('/api/categories',CategoriesRouter)

app.use('/api/orders',OrderRoutes)

app.use('/api/reviews',ReviewsRouter)

app.use('/api/user',UserRouter)


app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
}) // * This will show the data in the website

export default app;