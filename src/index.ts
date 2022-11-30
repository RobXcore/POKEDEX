import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./resources/swagger.json";
import pokemonRouter from "./infrastructure/routes/pokemonRouter";

const app = express();
app.use(pokemonRouter);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/*Decirle a express que inicialize el servidor en el puerto 5000 y que responda con un 
mensaje si todo sale bien*/
app.listen(5001, () => console.log("Servidor corriendo..."));
