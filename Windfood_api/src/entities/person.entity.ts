import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Bill } from "./bill.entity";
import { type } from "os";

@Entity({ name: "person" })
export class Person {
  @PrimaryGeneratedColumn({ name: "person_id" })
  personId: number;

  @Column({ name: "username", length: 255, unique: true })
  username: String;

  @Column({ name: "hased_password", length: 255 })
  password: String;

  @Column({ name: "role" })
  role: Number;

  @Column({ name: "name", length: 255 })
  name: String;

  @Column({ name: "phone_number", length: 10, nullable: true })
  phoneNumber: String;

  @Column({ name: "birthday", type: "date" })
  birthday: Date;

  @Column({ name: "url_img", type: "text", nullable: true })
  urlImg: String;

  @Column({ name: "token", type: "text" })
  token: String;

  @Column({ name: "create_date", default: null })
  createDate: Date;

  @OneToMany(() => Bill, (bill) => bill.creator)
  bills: Bill[];
}
