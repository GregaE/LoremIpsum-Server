/* eslint-disable @typescript-eslint/no-namespace */
import { Request, Response, NextFunction } from "express";
import { prisma } from '../controllers/index';

export async function authMiddleware (req: Request, res: Response, next: NextFunction) {
  try {
    const { uid } = req.session;
    const user = await prisma.user.findUnique({
      where: { user_id: uid },
    });
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
}