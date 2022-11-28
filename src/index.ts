import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./resources/swagger.json";
import pokemonRouter from "./infrastructure/routes/pokemonRouter";

const app = express();
app.use(pokemonRouter);

const swaggerOptions = {
  customCssUrl:
    "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-flattop.css",
};
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

/*Decirle a express que inicialize el servidor en el puerto 5000 y que responda con un 
mensaje si todo sale bien*/
app.listen(5000, () => console.log("Servidor corriendo..."));
