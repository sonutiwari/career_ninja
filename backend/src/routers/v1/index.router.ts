import express from "express";
import searchRouter from "./search.router";
import uploadDataRouter from "./uploadDataToDB.router";

const rootRouter = express.Router();

rootRouter.use("/upload", uploadDataRouter);
rootRouter.use("/search", searchRouter);

export default rootRouter;
