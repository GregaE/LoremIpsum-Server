import { Request, Response } from 'express';
import { prisma } from './index';

// get all education's objects

export async function getWorkExperience(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { userId } = req.params;
    const workExperiences = await prisma.workExperience.findMany({
      where: { userId },
      select: {
        id: true,
        job_title: true,
        company: true,
        city: true,
        country: true,
        start_date: true,
        end_date: true,
        description: true,
        userId: false,
      },
    });
    res.status(200).send(workExperiences);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

// post new education

export async function createWorkExperience(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const workExperience = await prisma.workExperience.create({
      data: req.body,
      select: {
        id: true,
        job_title: true,
        company: true,
        city: true,
        country: true,
        start_date: true,
        end_date: true,
        description: true,
        userId: false,
      },
    });
    res.status(200).send(workExperience);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

// edit an already posted education

export async function editWorkExperience(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    const editedWorkExperience = await prisma.workExperience.update({
      where: { id },
      data: req.body,
      select: {
        id: true,
        job_title: true,
        company: true,
        city: true,
        country: true,
        start_date: true,
        end_date: true,
        description: true,
        userId: false,
      },
    });
    res.status(200).send(editedWorkExperience);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

// delete one education

export async function deleteWorkExperience(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.params;
    await prisma.workExperience.delete({
      where: { id },
    });
    res.status(200);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
