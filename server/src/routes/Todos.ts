import { Router, Request, Response } from "express";
import { prisma } from "../server";

import { authenticateJWT } from "../middleware/authverfier";

const todoRouter = Router();

todoRouter.get("/", authenticateJWT, async (req: Request, res: Response) => {
  console.log(req);
  const getallTodos = await prisma.todo.findMany();
  console.log(getallTodos);
  res.send({
    todos: getallTodos,
  });
});

todoRouter.post("/", authenticateJWT, async (req: Request, res: Response) => {
  const user = req.body.user;
  const addTodo = await prisma.todo.create({
    data: {
      authorId: user.id,
      task: req.body.task,
    },
  });
  res.json({
    addedTodo: {
      addTodo,
    },
  });
});

todoRouter.delete(
  "/:id",
  authenticateJWT,
  async (req: Request, res: Response) => {
    const todo = req.params.id;
    try {
      const dleteTodo = await prisma.todo.delete({
        where: {
          id: Number(todo),
        },
      });
      res.json({
        data: "delted",
        dleteTodo: dleteTodo,
      });
    } catch (e) {
      console.log(e);
      res.json({
        error: e,
      });
    }
  }
);

todoRouter.patch(
  "/:id",
  authenticateJWT,
  async (req: Request, res: Response) => {
    const todo = req.params.id;
    const updatedTask = req.body.task;
    try {
      const updatedTodo = await prisma.todo.update({
        where: {
          id: Number(todo),
        },
        data: {
          task: updatedTask,
        },
      });
      res.json({
        updatedTask: updatedTodo,
      });
    } catch (E) {
      console.log(E);
      res.status(500);
      res.json({
        data: E,
      });
    }
  }
);

export default todoRouter;
