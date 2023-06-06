import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  OneToMany,
  JoinTable,
} from "typeorm";
import { Provider } from "./provider.entity";
import { Category } from "./category.entity";
import { type } from "os";
import { FoodBill } from "./foodbill.entity";

@Entity({ name: "food" })
export class Food {
  @PrimaryGeneratedColumn({ name: "food_id" })
  foodId: number;

  @Column({ name: "food_name", length: 255 })
  foodName: String;

  @Column({ name: "quantity" })
  quantity: Number;

  @Column({ name: "price" })
  price: Number;

  @Column({ name: "description", type: "text" })
  description: String;

  @Column({ name: "url_img", type: "text" })
  urlImg: String;

  @ManyToOne((type) => Provider)
  @JoinColumn({ name: "provider_id" })
  provider: Provider;

  @ManyToOne((type) => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @OneToMany(() => FoodBill, (foodbill) => foodbill.food)
  foodBills: FoodBill[];
}
