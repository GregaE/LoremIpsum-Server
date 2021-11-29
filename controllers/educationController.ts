import { Request, Response } from 'express';
import { prisma } from './index';

// get all education's objects

export async function getEducation(req: Request, res: Response): Promise<void> {
  try {
    const { userId } = req.params;
    const educations = await prisma.education.findMany({
      where: { userId },
      select: {
        id: true,
        degree: true,
        school: true,
        city: true,
        country: true,
        start_date: true,
        end_date: true,
        description: true,
        userId: false,
      },
    });
    res.status(200).send(educations);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

// post new education

export async function createEducation(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const education = await prisma.education.create({
      data: req.body,
      select: {
        id: true,
        degree: true,
        school: true,
        city: true,
        country: true,
        start_date: true,
        end_date: true,
        description: true,
        userId: false,
      },
    });
    res.status(200).send(education);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

// edit an already posted education

export async function editEducation(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const editedEducation = await prisma.education.update({
      where: { id },
      data: req.body,
      select: {
        id: true,
        degree: true,
        school: true,
        city: true,
        country: true,
        start_date: true,
        end_date: true,
        description: true,
        userId: false,
      },
    });
    res.status(200).send(editedEducation);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

// delete one education

export async function deleteEducation(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    await prisma.education.delete({
      where: { id },
    });
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
