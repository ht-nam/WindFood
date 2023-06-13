/**
 * Data Model Interfaces
 */

import { Provider } from "../entities/provider.entity";
import { myDataSource } from "../instances/data-source";

/**
 * In-Memory Store
 */

const providerRepository = myDataSource.getRepository(Provider);

/**
 * Service Methods
 */

export const findAll = async (): Promise<Provider[]> =>
  providerRepository.find();

export const findById = async (id: number): Promise<Provider | null> =>
  providerRepository.findOne({ where: { providerId: id } });

export const saveOrUpdate = async (newItem: Provider): Promise<Provider> => {
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

export const paging = async (pageIndex: number, pageSize: number) => {
  try {
    const [result, total] = await providerRepository.findAndCount({
      // where: { name: Like('%' + keyword + '%') }, order: { name: "DESC" },
      take: pageSize,
      skip: (pageIndex - 1) * pageSize,
      order: {
        createDate: "DESC"
      }
    });

    return { data: result, count: total };
  } catch (e) {
    return null;
  }
};