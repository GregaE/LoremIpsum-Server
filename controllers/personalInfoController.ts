import { Request, Response } from 'express';
import { prisma } from './index';

export async function getPersonalInfo(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { userId } = req.params;
    const personalDetails = await prisma.personalDetails.findMany({
      where: { userId },
      select: {
        id: true,
        email: true,
        phone_number: true,
        image: true,
        first_name: true,
        last_name: true,
        street: true,
        postcode: true,
        city: true,
        country: true,
        headline: true,
        userId: false,
      },
    });
    res.status(200).send(personalDetails);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function createPersonalInfo(req: Request, res: Response) {
  try {
    const profile = await prisma.personalDetails.create({
      data: req.body,
      select: {
        id: true,
        email: true,
        phone_number: true,
        image: true,
        first_name: true,
        last_name: true,
        street: true,
        postcode: true,
        city: true,
        country: true,
        headline: true,
        userId: false,
      },
    });
    res.status(201).send(profile);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function editPersonalInfo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updateProfile = await prisma.personalDetails.update({
      where: { id },
      data: req.body,
      select: {
        id: true,
        email: true,
        phone_number: true,
        image: true,
        first_name: true,
        last_name: true,
        street: true,
        postcode: true,
        city: true,
        country: true,
        headline: true,
        userId: false,
      },
    });
    res.status(201).send(updateProfile);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function deletePersonalInfo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await prisma.personalDetails.delete({
      where: { id },
    });
    res.status(204);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
