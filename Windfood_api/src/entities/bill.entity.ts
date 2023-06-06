import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Person } from "./person.entity";
import { FoodBill } from "./foodbill.entity";

@Entity({ name: "bill" })
export class Bill {
  @PrimaryGeneratedColumn({ name: "bill_id" })
  billId: number;

  @Column({ name: "total_price" })
  totalPrice: Number;

  @Column({ name: "payment_method", length: 255 })
  paymentMethod: String;

  @ManyToOne((type) => Person)
  @JoinColumn({ name: "person_id" })
  creator: Person;

  @OneToMany(() => FoodBill, (foodbill) => foodbill.bill)
  foodBills: FoodBill[];
}
