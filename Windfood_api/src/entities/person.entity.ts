import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Bill } from "./bill.entity";

@Entity({ name: "person" })
export class Person {
  @PrimaryGeneratedColumn({ name: "person_id" })
  personId: number;

  @Column({ name: "username", length: 255 })
  username: String;

  @Column({ name: "hased_password", length: 255 })
  hashedPassword: String;

  @Column({ name: "role" })
  role: Number;

  @Column({ name: "name", length: 255 })
  name: String;

  @Column({ name: "phone_number", length: 10 })
  phoneNumber: String;

  @Column({ name: "birthday", type: "date" })
  birthday: Date;

  @Column({ name: "url_img", type: "text" })
  urlImg: String;

  @OneToMany(() => Bill, (bill) => bill.creator)
  bills: Bill[];
}
