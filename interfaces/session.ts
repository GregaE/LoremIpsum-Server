/* eslint-disable @typescript-eslint/no-namespace */
import { User } from "@prisma/client";
import { Request } from "express";

declare global {
  namespace Express {
      interface Request {
          user?: User;
      }
  }
  interface Session {
    uid: string;
  }
  interface SessionData {
    user: { [key: string]: any };
  }
}
