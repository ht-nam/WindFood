/**
 * Data Model Interfaces
 */

import { Category } from "../entities/category.entity";
import { myDataSource } from "../instances/data-source";

/**
 * In-Memory Store
 */

const categoryRepository = myDataSource.getRepository(Category);

/**
 * Service Methods
 */

export const findAll = async (): Promise<Category[]> =>
  categoryRepository.find();

export const findById = async (id: number): Promise<Category | null> =>
  categoryRepository.findOne({ where: { categoryId: id } });

export const saveOrUpdate = async (newItem: Category): Promise<Category> => {
  return categoryRepository.save(newItem);
};

export const remove = async (id: number): Promise<boolean> => {
  try {
    categoryRepository.delete(id);
    return true;
  } catch (e) {
    return false;
  }
};
