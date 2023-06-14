import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { Provider } from "./provider.entity";
import { Category } from "./category.entity";
import { FoodBill } from "./foodbill.entity";

@Entity({ name: "food" })
export class Food {
  @PrimaryGeneratedColumn({ name: "food_id" })
  foodId: number;

  @Column({ name: "food_name", length: 255 })
  foodName?: String;

  @Column({ name: "quantity" })
  quantity?: Number;

  @Column({ name: "import_price" })
  importPrice?: Number;

  @Column({ name: "price" })
  price?: Number;

  @Column({ name: "description", type: "text", nullable: true })
  description?: String;

  @Column({ name: "url_img", type: "text", nullable: true })
  urlImg?: String;

  @Column({ name: "create_date", default: null })
  createDate?: Date;

  @ManyToOne((type) => Provider, { cascade: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "provider_id" })
  provider?: Provider;

  @ManyToOne((type) => Category, { cascade: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "category_id" })
  category?: Category;

  @OneToMany(() => FoodBill, (foodbill) => foodbill.food)
  foodBills?: FoodBill[];
}
