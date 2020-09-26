import express from "express";
import SearchController from "../../controllers/search.controller";

const searchRouter = express.Router();
const searchController = new SearchController();

searchRouter.use("/", searchController.searchInDb);

export default searchRouter;
