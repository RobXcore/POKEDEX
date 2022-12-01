import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./resources/swagger.json";
import pokemonRouter from "./infrastructure/routes/pokemonRouter";
import { regionRoute } from "./infrastructure/factory/pokemonByRegionFactory";

const app = express();
app.use(regionRoute);
app.use(pokemonRouter);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/*Decirle a express que inicialize el servidor en el puerto 5000 y que responda con un 
mensaje si todo sale bien*/
app.listen(5000, () => console.log("Servidor corriendo..."));
