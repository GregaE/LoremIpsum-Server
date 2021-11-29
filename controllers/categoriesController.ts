import { Request, Response } from 'express';
import { prisma } from './index';
import { categoryValidation } from '../interfaces/categories';
import { convertToDates } from '../helpers/Helpers';

export async function getCategory(req: Request, res: Response): Promise<void> {
  try {
    const { category, user_id } = req.params;
    if (categoryValidation.includes(category)) {
      //@ts-ignore
      const categoryRecords = await prisma[category].findMany({
        where: { userId: user_id },
      });
      const filteredRecords = categoryRecords.map(
        (cat: { [x: string]: any; userId: string }) => {
          const { userId, ...record } = cat;
          return record;
        }
      );
      res.status(200).send(filteredRecords);
      return;
    }
    res.status(500).send('Category is not allowed');
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function createCategoryRecord(req: Request, res: Response) {
  try {
    const { category } = req.params;
    convertToDates(req);
    if (categoryValidation.includes(category)) {
      //@ts-ignore
      const { userId, ...newRecord } = await prisma[category].create({
        data: req.body,
      });
      res.status(201).send(newRecord);
      return;
    }
    res.status(500).send('Category is not allowed');
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function editCategoryRecord(req: Request, res: Response) {
  try {
    const { category, id } = req.params;
    const { userId, ...data } = req.body;
    convertToDates(data);
    if (categoryValidation.includes(category)) {
      //@ts-ignore
      const { userId, ...updatedRecord } = await prisma[category].update({
        where: { id },
        data,
      });
      res.status(201).send(updatedRecord);
      return;
    }
    res.status(500).send('Category is not allowed');
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function deleteCategoryRecord(req: Request, res: Response) {
  try {
    const { category, id } = req.params;
    if (categoryValidation.includes(category)) {
      //@ts-ignore
      await prisma[category].delete({
        where: { id },
      });
      res.sendStatus(204);
      return;
    }
    res.status(500).send('Category is not allowed');
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
