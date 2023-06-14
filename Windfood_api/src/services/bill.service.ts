/**
 * Data Model Interfaces
 */

import { Bill } from "../entities/bill.entity";
import { myDataSource } from "../instances/data-source";

/**
 * In-Memory Store
 */

const billRepository = myDataSource.getRepository(Bill);

/**
 * Service Methods
 */

export const findAll = async (): Promise<Bill[]> => billRepository.find();

export const findById = async (id: number): Promise<Bill | null> =>
  billRepository.findOne({ where: { billId: id } });

export const saveOrUpdate = async (newItem: Bill): Promise<Bill> => {
  return billRepository.save(newItem);
};

export const remove = async (id: number): Promise<boolean> => {
  try {
    billRepository.delete(id);
    return true;
  } catch (e) {
    return false;
  }
};

export const paging = async (pageIndex: number, pageSize: number) => {
  try {
    const [result, total] = await billRepository.findAndCount({
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

export const getDashboard = async (fromDate: Date, toDate: Date): Promise<object | null> => {
  let queryString: string = "select * from bill where";
  let [rs] = await myDataSource.manager.query(queryString);
  return rs;
}

//Doanh thu, loi nhuan theo thang
// SELECT fb.bill_id, SUM(price * fb.quantity) AS DoanhThu, SUM((price - import_price) * fb.quantity) AS LoiNhuan
// FROM food_bill fb
// JOIN food f ON f.food_id = fb.food_id
// group BY fb.bill_id;