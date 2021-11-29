import { Request, Response } from 'express';
import { prisma } from './index';

export async function getLanguages(req: Request, res: Response): Promise<void> {
  try {
    const { userId } = req.params;
    const Languages = await prisma.languages.findMany({
      where: { userId },
      select: {
        id: true,
        language_name: true,
        level: true,
        userId: false,
      },
    });
    res.status(200).send(Languages);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function createLanguage(req: Request, res: Response) {
  try {
    const newLanguage = await prisma.languages.create({
      data: req.body,
      select: {
        id: true,
        language_name: true,
        level: true,
        userId: false,
      },
    });
    console.log(newLanguage);
    res.status(201).send(newLanguage);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function editLanguage(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updatedLanguage = await prisma.languages.update({
      where: { id },
      data: req.body,
      select: {
        id: true,
        language_name: true,
        level: true,
        userId: false,
      },
    });
    console.log(updatedLanguage);
    res.status(201).send(updatedLanguage);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function deleteLanguage(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await prisma.languages.delete({
      where: { id },
      select: {
        id: true,
        language_name: true,
        level: true,
        userId: false,
      },
    });
    res.status(204);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
