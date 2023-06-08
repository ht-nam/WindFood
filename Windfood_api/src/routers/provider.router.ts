/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ProviderService from "../services/provider.service";
import { Provider } from "../entities/provider.entity";

/**
 * Router Definition
 */

export const itemsRouter = express.Router();
export const PATH = "/providers";

/**
 * Controller Definitions
 */

// GET items

itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Provider[] = await ProviderService.findAll();

    res.status(200).send(items);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// PUT items/:id

itemsRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const itemUpdate: Provider = req.body;

    const updatedItem: Provider = await ProviderService.saveOrUpdate(
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
    await ProviderService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});

// GET items/:id

itemsRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const item: Provider | null = await ProviderService.findById(id);

    if (item) {
      return res.status(200).send(item);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send((e as Error).message);
  }
});
