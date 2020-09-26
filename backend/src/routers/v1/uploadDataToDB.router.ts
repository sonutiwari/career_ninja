import express from "express";
import UploadDataController from "../../controllers/uploadData.controller";

const uploadDataRouter = express.Router();
const uploadController = new UploadDataController();
uploadDataRouter.use("/", uploadController.uploadDataFromCSV);

export default uploadDataRouter;
