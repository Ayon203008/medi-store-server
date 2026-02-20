import { NextFunction, Request, Response } from "express"
import { auth } from "../lib/auth"

export enum Role {
    ADMIN = "ADMIN",
    SELLER = "SELLER",
    CUSTOMER = "CUSTOMER"
}

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string,
                name: string
                email: string,
                role: Role,
            }
        }
    }
}

const AuthMiddleware = (...roles: Role[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const session = await auth.api.getSession({
                headers: req.headers as any
            })

            console.log("Session",session)

            if (!session) {
                return res.status(401).json({
                    message: "Unauthorized",
                    success: false
                })
            }

            req.user = {
                id: session.user.id,
                email: session.user.email,
                name: session.user.name,
                role: (session.user as any).role, 
            };

            if (roles.length > 0 && !roles.includes(req.user.role as Role)) {
                return res.status(403).json({
                    success: false,
                    message: `Forbidden! Only ${roles.join(" or ")} can access this resource.`
                });
            }

            next()

        } catch (err) {
            next(err)
        }
    }
}


export default AuthMiddleware



