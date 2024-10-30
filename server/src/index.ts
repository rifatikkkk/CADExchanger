import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

import router from "./routes";

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", router());

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started on ${process.env.SERVER_PORT}!`);
});
