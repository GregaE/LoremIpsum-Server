/* eslint-disable @typescript-eslint/no-namespace */
import { User } from "@prisma/client";

declare global {
  namespace Express {
      interface Request {
          user?: User;
      }
  }
  interface SessionData {
    user: { [key: string]: any };
  }
}
