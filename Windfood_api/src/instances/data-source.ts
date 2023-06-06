import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root1",
  password: "",
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
