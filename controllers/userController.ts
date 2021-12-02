import { Request, Response } from 'express';
import { prisma } from './index';
import bcrypt from 'bcrypt';


declare module "express-session" {
  interface Session {
    uid: string;
  }
}

//TODO this needs to be changed later for find by email
//TODO in get profile and create profile - remove the Password from the object before sending back to the front end. Generate the session ID instead to validate user

export async function createUser(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email: email },
  });
  if (user) {
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  }
  try {
    if (password === '') throw new Error();
    const newUser = await prisma.user.create({
      data: { ...req.body, password: bcrypt.hashSync(req.body.password, 10) },
    });
    req.session.uid = newUser.user_id;
    res.status(201).send(newUser);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (user) {
      const validatedPass = await bcrypt.compare(password, user.password);
      if (!validatedPass) throw new Error();
      req.session.uid = user.user_id;
      res.status(200).send(user);
    }
    else {
      throw new Error()
    }
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
  }
}

export async function logout(req: Request, res: Response) {
  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .send({ error, message: 'Could not log out, please try again' });
    } else {
      res.clearCookie('sid');
      res.sendStatus(200);
    }
  });
}

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