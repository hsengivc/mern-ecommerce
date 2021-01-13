import jwt from "jsonwebtoken";
import { User } from "../models";
import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "../types";

interface Decoded {
  id: string;
  iat: Date;
  exp: Date;
}

export const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;
    const secret = process.env.JWT_SECRET!;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, secret) as Decoded;
        const dbUser = await User.findById(decoded.id).select("-password");
        if (!dbUser) throw new Error("No user data returned");
        req.user = {
          _id: dbUser._id,
          name: dbUser.name,
          email: dbUser.email,
          isAdmin: dbUser.isAdmin,
        };
        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);
