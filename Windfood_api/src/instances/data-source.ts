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
    .then(() => {
      console.log("Data source has been initialized!");
    })
    .catch((error) => {
      console.log("Error during data source initialization: ", error);
    });
}
