import { toNodeHandler } from "better-auth/node";
import express, { Application, Request, Response } from "express";
import { auth } from "./lib/auth";
const app: Application = express();

app.all('/api/auth/{*any}', toNodeHandler(auth));
app.use(express.json()) // * This will allow us to send data in the body of the request


app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
}) // * This will show the data in the website

export default app;