import { Request, Response } from 'express';
import { prisma } from './index';

export async function getCertificates(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { category, userId } = req.params;
    const certificates = await prisma[category].findMany({
      where: { userId },
    });
    res.status(200).send(certificates);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function createCertificate(req: Request, res: Response) {
  try {
    const newCertificate = await prisma.certificates.create({
      data: req.body,
    });
    console.log(newCertificate);
    res.status(201).send(newCertificate);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function editCertificate(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updatedCertificate = await prisma.certificates.update({
      where: { id },
      data: req.body,
    });
    console.log(updatedCertificate);
    res.status(201).send(updatedCertificate);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function deleteCertificate(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await prisma.certificates.delete({
      where: { id },
    });
    res.status(204);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
