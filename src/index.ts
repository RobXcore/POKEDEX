import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./resources/swagger.json";
import pokemonRouter from "./infrastructure/routes/pokemonRouter";

const app = express();
app.use(pokemonRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(5000, () => console.log("Servidor corriendo..."));
