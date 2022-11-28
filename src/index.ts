import express from "express";
import regionRoute from "./infrastructure/routes/GetPokemonByRegionRoute";
const app = express();
app.use(regionRoute);
/*Decirle a express que inicialize el servidor en el puerto 5000 y que responda con un 
mensaje si todo sale bien*/
app.listen(5000, () => console.log("Servidor corriendo..."));
