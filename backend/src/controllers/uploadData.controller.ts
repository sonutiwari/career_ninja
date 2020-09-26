import db from "../configs/dbConfig";
import express from "express";
import csvtojson from "csvtojson";
import { Connection } from "mongoose";

export default class UploadDataController {
  private db: Connection;
  constructor() {
    this.db = db;
  }

  /**
   * The controller to upload file in mongodb.
   * TODO --> future --> make the file path as general and let user
   * upload the file but for now this will do.
   * @param req : Express Request.
   * @param res : Express Response.
   *
   */
  uploadDataFromCSV = (req: express.Request, res: express.Response) => {
    csvtojson()
      .fromFile("../../../battles.csv")
      .then((data) => {
        this.db
          .collection("battle")
          .insertMany(data)
          .then((resp) =>
            res.status(200).json({ message: "Inserted successfully" })
          )
          .catch((err) => res.status(400).json(err.message))
          .finally(() => this.db.close());
      });
  };
}
