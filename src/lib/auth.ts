import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { role } from "better-auth/plugins";
// If your Prisma file is located elsewhere, you can change the path

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    trustedOrigins:[process.env.APP_URL!],

    emailAndPassword: {
        enabled: true,
        requireEmailVerification:false
    },

    user:{
        additionalFields:{
            role:{
                type:"string",
                defaultValue:"CUSTOMER"
            }
        }
    }
});

