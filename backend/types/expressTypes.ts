import { Request as Req, Response as Res, NextFunction as Next } from "express";
import { IUser } from ".";

interface TokenUser {
  user?: { _id: string; name: string; email: string; isAdmin?: boolean };
}

export type Request = Req & TokenUser;
export type Response = Res & TokenUser;
export type NextFunction = Next;
