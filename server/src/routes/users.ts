import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../middleware/config";
const prisma = new PrismaClient();
const userRouter = Router();

userRouter.post("/register", async (req: Request, res: Response) => {
  const name = req.body.username;
  const password = req.body.password;

  //  hash the password
  let salt = await bcrypt.genSalt(10);
  let hashedPasswords = await bcrypt.hash(password, salt);

  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        password: hashedPasswords,
      },
    });
    res.json({
      data: {
        user,
      },
    });
  } catch (err) {
    res.send({
      data: {
        status: "403",
        response: "user already exist ",
      },
    });
  }
});

userRouter.post("/login", async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  const userExist = await prisma.user.findUnique({
    where: {
      name: username,
    },
  });

  console.log(userExist);

  if (userExist) {
    let decryptedpassword = await bcrypt.compare(password, userExist.password);

    const jwt_token = jwt.sign(username, config.TOKEN_SECRET);

    if (decryptedpassword && userExist?.name == username) {
      res.send({
        data: {
          user: userExist,
          jwt_token: jwt_token,
        },
      });
    } else {
      res.json({
        data: {
          response: 403,
          message: "wrong password ",
        },
      });
    }
  } else {
    res.json({
      data: {
        response: 403,
        message: "user doesnt exist ",
      },
    });
  }
});

export default userRouter;
