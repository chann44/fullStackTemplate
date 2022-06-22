import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import todorouter from "./routes/Todos";
import userrouter from "./routes/users";
import { PrismaClient } from "@prisma/client";
const app = express();
export const prisma = new PrismaClient();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyparser.json());

app.use("/", todorouter);
app.use("/user", userrouter);

export default app;
