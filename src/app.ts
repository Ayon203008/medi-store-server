import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/",(req:Request,res:Response)=>{
    res.send("Hello World")
}) // * This will show the data in the website

export default app;