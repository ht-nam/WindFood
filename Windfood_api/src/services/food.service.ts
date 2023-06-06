/**
 * Data Model Interfaces
 */

import { Food } from "../entities/food.entity";
import { myDataSource } from "../instances/data-source";

/**
 * In-Memory Store
 */

const providerRepository = myDataSource.getRepository(Food);

/**
 * Service Methods
 */

export const findAll = async (): Promise<Food[]> => providerRepository.find();

export const findById = async (id: number): Promise<Food | null> =>
  providerRepository.findOne({ where: { foodId: id } });

export const saveOrUpdate = async (newItem: Food): Promise<Food> => {
  return providerRepository.save(newItem);
};

export const remove = async (id: number): Promise<boolean> => {
  try {
    providerRepository.delete(id);
    return true;
  } catch (e) {
    return false;
  }
};
