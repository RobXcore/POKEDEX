import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../src/resources/swagger.json";
import pokemonRouter from "./infrastructure/routes/pokemonRouter";

const app = express();

app.use(pokemonRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/testIndex", (_req, res) => {
  res.json("Estas en el index, todo parece funcionar aqui...");
});

/*Decirle a express que inicialize el servidor en el puerto 5000 y que responda con un 
mensaje si todo sale bien*/
app.listen(5000, () => console.log("Servidor corriendo..."));
