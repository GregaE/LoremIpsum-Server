import { Request, Response } from 'express';
import { prisma } from './index';
import { categoryValidation, Categories } from '../interfaces/categories';
import { convertToFeFormat, convertToDbFormat } from '../helpers/Helpers';

export async function getCategory(req: Request, res: Response): Promise<void> {
  try {
    const { category, user_id } = req.params;
    if (categoryValidation.includes(category)) {
      //@ts-ignore
      const categoryRecords = await prisma[category].findMany({
        where: { userId: user_id },
      });
      const filteredRecords = categoryRecords.map((cat: Categories) => {
        const { userId, ...record } = cat;
        return convertToFeFormat(record, category);
      });
      res.status(200).send(filteredRecords);
      return;
    }
    res.status(500).send('Category is not allowed');
  } catch (e) {
    console.log('here, error:', e);
    console.log(e);
    res.status(500).send(e);
  }
}

export async function createCategoryRecord(req: Request, res: Response) {
  try {
    const { category } = req.params;
    if (categoryValidation.includes(category)) {
      const { id, ...data } = convertToDbFormat(req.body, category);
      //@ts-ignore
      const { userId, ...newRecord }: Categories = await prisma[
        category
      ].create({
        data,
      });
      res.status(201).send(convertToFeFormat(newRecord, category));
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
    if (categoryValidation.includes(category)) {
      //@ts-ignore
      const { userId, ...updatedRecord }: Categories = await prisma[
        category
      ].update({
        where: { id },
        data: convertToDbFormat(data, category),
      });
      res.status(201).send(convertToFeFormat(updatedRecord, category));
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
