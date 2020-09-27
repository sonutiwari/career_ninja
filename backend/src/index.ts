import express from "express";
import cors from "cors";
import rootRouter from "./routers/index.router";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/", rootRouter);

app.listen(PORT);
