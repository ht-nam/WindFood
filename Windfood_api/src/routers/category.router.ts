/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as CategoryService from "../services/category.service";
import { Category } from "../entities/category.entity";

/**
 * Router Definition
 */

export const itemsRouter = express.Router();
export const PATH = "/categories";

/**
 * Controller Definitions
 */

// GET items

itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Category[] = await CategoryService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// POST items

itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: Category = req.body;

    const newItem = await CategoryService.saveOrUpdate(item);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await CategoryService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Category | null = await CategoryService.findById(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});
