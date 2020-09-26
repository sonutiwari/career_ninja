import express from "express";
import SearchService from "../services/searchService";
export default class SearchController {
  searchInDb(req: express.Request, res: express.Response) {
    const { search } = req.query;
    if (!search) {
      return res.status(400).json({ message: "No results for empty query" });
    }
    const searchService = new SearchService();
    searchService
      .searchInDB(search as string)
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).json({ message: err.message }));
  }
}
