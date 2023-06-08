/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as FoodService from "../services/food.service";
import { Food } from "../entities/food.entity";
import { log } from "console";

/**
 * Router Definition
 */

export const itemsRouter = express.Router();
export const PATH = "/foods";

/**
 * Controller Definitions
 */

// GET items

itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Food[] = await FoodService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// PAGING items
itemsRouter.get("/paging", async (req: Request, res: Response) => {
  try {
    let [pageIndex, pageSize]: number[] = Object.values(req.body);
    let result = await FoodService.paging(pageIndex, pageSize);
    return res.status(200).send(result);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// POST items

itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: Food = req.body;

    const newItem = await FoodService.saveOrUpdate(item);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await FoodService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Food | null = await FoodService.findById(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});
