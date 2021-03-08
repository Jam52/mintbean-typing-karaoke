import express from "express";
import clientRouter from "./clientRouter.js";
const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/game", gameRouter);
rootRouter.use("/api/v1/landing-page", landingPageRouter);


export default rootRouter;