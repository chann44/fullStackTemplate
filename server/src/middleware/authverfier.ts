import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { config } from "./config";
import { prisma } from "../server";

export const authenticateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    try {
      const userpayload = jwt.verify(token, config.TOKEN_SECRET);
      if (userpayload) {
        const user = await prisma.user.findFirst({
          where: {
            name: String(userpayload),
          },
        });
        req.body.user = user;
        next();
        return;
      } else {
        return res.sendStatus(403);
      }
    } catch (e) {
      res.json({
        error: e,
      });
      return;
    }
  } else {
    return res.json({
      res: "header not found ",
    });
  }
};
