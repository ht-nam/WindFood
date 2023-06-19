import { FoodBill } from "./food-bill.model";
import { Person } from "./person.model";

export class Bill {

    billId?: number;

    totalPrice?: number;

    createDate?: Date;

    paymentMethod?: string;

    creator?: Person;

    foodBills?: FoodBill[];

    constructor() {
        
    }
}