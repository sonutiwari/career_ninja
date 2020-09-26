import express from "express";
import v1Router from "./v1/index.router";
const rootRouter = express.Router();

rootRouter.use("/v1", v1Router);

rootRouter.all("/*", (req, res) => {
  res
    .status(404)
    .json({ message: "We couldn't find resources you are looking for" });
});
export default rootRouter;
