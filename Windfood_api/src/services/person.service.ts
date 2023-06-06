/**
 * Data Model Interfaces
 */

import { Person } from "../entities/person.entity";
import { myDataSource } from "../instances/data-source";

/**
 * In-Memory Store
 */

const providerRepository = myDataSource.getRepository(Person);

/**
 * Service Methods
 */

export const findAll = async (): Promise<Person[]> => providerRepository.find();

export const findById = async (id: number): Promise<Person | null> =>
  providerRepository.findOne({ where: { personId: id } });

export const saveOrUpdate = async (newItem: Person): Promise<Person> => {
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
