import { Router } from "express";
export const regionRoute = Router();

regionRoute.get("/region/:region", async (req, res) => {
	//routes
	const algo = await getData(req.params["region"]);
	res.send(algo);
});
