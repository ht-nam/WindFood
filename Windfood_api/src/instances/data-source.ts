import { DataSource } from "typeorm";
import * as dotEnv from 'dotenv';
dotEnv.config();

export const myDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env?.DB_USER,
  password: process.env?.DB_PASSWORD,
  database: "windfood",
  entities: ["src/entities/*.ts"],
  logging: true,
  synchronize: true,
});

export function initialDatabase(): void {
  myDataSource
    .initialize()
    .then(async () => {
      console.log("Data source has been initialized!");
      try {
        await myDataSource.query("insert into person(username, hashed_password, name, birthday, role, token) values ('admin','$2a$10$v6x2L6vNv1jP/2r7t55cguorm3Ulafu5lB.mXmR.mE/U1xbZ8/ElW', '', '2000-01-01', 0, null)");
        console.log("Admin account created successfully");
      } catch (e) {
      }
    })
    .catch((error) => {
      console.log("Error during data source initialization: ", error);
    });
}
