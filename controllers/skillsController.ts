import { Request, Response } from 'express';
import { prisma } from './index';

export async function getSkills(req: Request, res: Response): Promise<void> {
  try {
    const { userId } = req.params;
    const skills = await prisma.skills.findMany({
      where: { userId },
      select: { id: true, name: true, description: true, userId: false },
    });
    res.status(200).send(skills);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function createSkill(req: Request, res: Response) {
  try {
    const newSkill = await prisma.skills.create({
      data: req.body,
      select: { id: true, name: true, description: true, userId: false },
    });
    console.log(newSkill);
    res.status(201).send(newSkill);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function editSkill(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updatedSkill = await prisma.skills.update({
      where: { id },
      data: req.body,
      select: { id: true, name: true, description: true, userId: false },
    });
    console.log(updatedSkill);
    res.status(201).send(updatedSkill);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function deleteSkill(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await prisma.skills.delete({
      where: { id },
    });
    res.status(204);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
