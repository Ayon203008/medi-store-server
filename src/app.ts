import { toNodeHandler } from "better-auth/node";
import express, { Application, Request, Response } from "express";
import { auth } from "./lib/auth";
const app: Application = express();
import cors from "cors";
import { medicineRouter } from "./models/medicine/Medicine.routes";
import { CategoriesRouter } from "./models/categories/categories.routes";
import { OrderRoutes } from "./models/orders/orders.routes";


app.all('/api/auth/{*any}', toNodeHandler(auth));
app.use(express.json()) // * This will allow us to send data in the body of the request

app.use(cors({
    origin: process.env.APP_URL,
    credentials: true
}))

app.use('/api/medicine',medicineRouter)

app.use('/api/categories',CategoriesRouter)

app.use('/api/orders',OrderRoutes)


app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
}) // * This will show the data in the website

export default app;