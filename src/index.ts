import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async (connection) => {
    await connection.runMigrations();
    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Listening to Port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
