import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Bill } from "./bill.entity";
import { Food } from "./food.entity";

@Entity({ name: "food_bill" })
export class FoodBill {
  @PrimaryGeneratedColumn({ name: "food_bill_id" })
  foodBillId: number;

  @Column({ name: "quantity" })
  quantity?: Number;

  @Column({ name: "create_date", default: null })
  createDate?: Date;

  @ManyToOne((type) => Food)
  @JoinColumn({ name: "food_id" })
  food?: Food;

  @ManyToOne((type) => Bill)
  @JoinColumn({ name: "bill_id" })
  bill?: Bill;
}
