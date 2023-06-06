/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as FoodBillService from "../services/foodbill.service";
import { FoodBill } from "../entities/foodbill.entity";

/**
 * Router Definition
 */

export const itemsRouter = express.Router();
export const PATH = "/foodbills";

/**
 * Controller Definitions
 */

// GET items

itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: FoodBill[] = await FoodBillService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: FoodBill | null = await FoodBillService.findById(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// POST items

itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: FoodBill = req.body;

    const newItem = await FoodBillService.saveOrUpdate(item);

    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// PUT items/:id

itemsRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const itemUpdate: FoodBill = req.body;

    const updatedItem: FoodBill = await FoodBillService.saveOrUpdate(
      itemUpdate
    );

    if (updatedItem) {
      return res.status(200).json(updatedItem);
    }

    res.status(201).json(updatedItem);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// DELETE items/:id

itemsRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await FoodBillService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});
