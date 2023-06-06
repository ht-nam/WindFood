/**
 * Data Model Interfaces
 */

import { Category } from "../entities/category.entity";
import { myDataSource } from "../instances/data-source";

/**
 * In-Memory Store
 */

const providerRepository = myDataSource.getRepository(Category);

/**
 * Service Methods
 */

export const findAll = async (): Promise<Category[]> =>
  providerRepository.find();

export const findById = async (id: number): Promise<Category | null> =>
  providerRepository.findOne({ where: { categoryId: id } });

export const saveOrUpdate = async (newItem: Category): Promise<Category> => {
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
