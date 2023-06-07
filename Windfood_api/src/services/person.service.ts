/**
 * Data Model Interfaces
 */

import { Person } from "../entities/person.entity";
import { myDataSource } from "../instances/data-source";

/**
 * In-Memory Store
 */

const personRepository = myDataSource.getRepository(Person);

/**
 * Service Methods
 */

export const findAll = async (): Promise<Person[]> => personRepository.find();

export const findById = async (id: number): Promise<Person | null> =>
  personRepository.findOne({ where: { personId: id } });

export const saveOrUpdate = async (newItem: Person): Promise<Person> => {
  return personRepository.save(newItem);
};

export const remove = async (id: number): Promise<boolean> => {
  try {
    personRepository.delete(id);
    return true;
  } catch (e) {
    return false;
  }
};
