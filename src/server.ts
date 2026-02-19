// import { error } from "node:console";
import app from "./app";
import { prisma } from "./lib/prisma";

const PORT= 5000;

async function main(){
    try{
        await prisma.$connect();
        console.log("Database connected successfully");
        app.listen(PORT,()=>{
            console.log(`server is running on port ${PORT}`);
        })

    }catch(error){
        console.log("An error occurred ",error)
        await prisma.$disconnect();
        process.exit(1)
    }
}



// * Must call the main function here

main()