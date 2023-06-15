import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Food } from "./food.entity";

@Entity({ name: "category" })
export class Category {
  @PrimaryGeneratedColumn({ name: "category_id" })
  categoryId: number;

  @Column({ name: "category_name", length: 255 })
  categoryName?: String;

  @Column({ name: "create_date", default: null })
  createDate?: Date;

  @OneToMany(() => Food, (food) => food.category, { cascade: true, eager: true })
  foods?: Food[];
}
