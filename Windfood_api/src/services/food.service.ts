/**
 * Data Model Interfaces
 */

import { Food } from "../entities/food.entity";
import { Provider } from "../entities/provider.entity";
import { myDataSource } from "../instances/data-source";
import { Category } from "../entities/category.entity";
import { FindManyOptions } from "typeorm";

/**
 * In-Memory Store
 */

const foodRepository = myDataSource.getRepository(Food);

/**
 * Service Methods
 */

export const findAll = async (): Promise<Food[]> => foodRepository.find();

export const findById = async (id: number): Promise<Food | null> =>
  foodRepository.findOne({ where: { foodId: id } });

export const findByProvider = async (provider: Provider): Promise<Food[]> =>
  foodRepository.find({ where: { provider: provider } } as FindManyOptions<Food>);

export const findByCategory = async (category: Category): Promise<Food[] | null> =>
  foodRepository.find({ where: { category: category } } as FindManyOptions<Food>);

export const saveOrUpdate = async (newItem: Food): Promise<Food> => {
  return foodRepository.save(newItem);
};

export const remove = async (id: number): Promise<boolean> => {
  try {
    foodRepository.delete(id);
    return true;
  } catch (e) {
    return false;
  }
};

export const paging = async (pageIndex: number, pageSize: number) => {
  try {
    console.log("a");

    const [result, total] = await foodRepository.findAndCount({
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
