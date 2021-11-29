import { Request, Response } from 'express';
import { prisma } from './index';

// get all created CVs

export async function getCVs(req: Request, res: Response): Promise<void> {
  try {
    const { userId } = req.params;
    const cvs = await prisma.savedCV.findMany({
      where: { userId },
      select: { id: true, saved_cv: true, date_created: true, userId: false },
    });
    res.status(200).send(cvs);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

// post new CV created

export async function postNewCV(req: Request, res: Response): Promise<void> {
  try {
    const cv = await prisma.savedCV.create({
      data: req.body,
      select: { id: true, saved_cv: true, date_created: true, userId: false },
    });
    res.status(200).send(cv);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

// delete Cv

export async function deleteCV(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    await prisma.savedCV.delete({
      where: { id },
    });
    res.status(204);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
