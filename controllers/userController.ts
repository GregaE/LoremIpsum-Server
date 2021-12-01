import { Request, Response } from 'express';
import { prisma } from './index';
import bcrypt from 'bcrypt';

//TODO this needs to be changed later for find by email
//TODO in get profile and create profile - remove the Password from the object before sending back to the front end. Generate the session ID instead to validate user
export async function findUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { user_id: id },
    });
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
export async function createUser(req: Request, res: Response) {
  try {
    const newUser = await prisma.user.create({
      data: { ...req.body, password: bcrypt.hashSync(req.body.password, 10) },
    });
    res.status(201).send(newUser);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const updatedUser = await prisma.user.update({
      where: { user_id: id },
      data: { ...req.body, password: bcrypt.hashSync(req.body.password, 10) },
    });
    res.status(201).send(updatedUser);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const removedUser = await prisma.user.delete({
      where: { user_id: id },
    });
    res.status(201).send(removedUser);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
