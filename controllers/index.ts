const db = require('../config/db.json');
import { Request, Response } from 'express';

export function serveMockData(req: Request, res: Response) {
  try {
    res.status(200).send(db);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
