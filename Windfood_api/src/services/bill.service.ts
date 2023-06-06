/**
 * Data Model Interfaces
 */

import { Bill } from "../entities/bill.entity";
import { myDataSource } from "../instances/data-source";

/**
 * In-Memory Store
 */

const providerRepository = myDataSource.getRepository(Bill);

/**
 * Service Methods
 */

export const findAll = async (): Promise<Bill[]> => providerRepository.find();

export const findById = async (id: number): Promise<Bill | null> =>
  providerRepository.findOne({ where: { billId: id } });

export const saveOrUpdate = async (newItem: Bill): Promise<Bill> => {
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
