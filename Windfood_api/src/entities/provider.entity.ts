import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Food } from "./food.entity";

@Entity({ name: "provider" })
export class Provider {
  @PrimaryGeneratedColumn({ name: "provider_id" })
  providerId: number;

  @Column({ name: "provider_name", length: 255 })
  providerName: String;

  @OneToMany(() => Food, (food) => food.provider)
  foods: Food[];
}
