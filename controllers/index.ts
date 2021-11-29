const db = require('../config/db.json');
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

//prisma to make queries to the db
export const prisma = new PrismaClient();

// for now this serves mock data replace with all commands into the index from all controllers
export function serveMockData(req: Request, res: Response) {
  try {
    res.status(200).send(db);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
