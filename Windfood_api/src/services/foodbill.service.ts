/**
 * Data Model Interfaces
 */

import { FoodBill } from "../entities/foodbill.entity";
import { myDataSource } from "../instances/data-source";

/**
 * In-Memory Store
 */

const providerRepository = myDataSource.getRepository(FoodBill);

/**
 * Service Methods
 */

export const findAll = async (): Promise<FoodBill[]> =>
  providerRepository.find();

export const findById = async (id: number): Promise<FoodBill | null> =>
  providerRepository.findOne({ where: { foodBillId: id } });

export const saveOrUpdate = async (newItem: FoodBill): Promise<FoodBill> => {
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
