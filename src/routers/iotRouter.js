import express from "express";
import { iot, edit } from "../controllers/iotController";

//iot 관리 page
const iotRouter = express.Router();

iotRouter.get("/", iot);
iotRouter.get("/edit", edit);

export default iotRouter;
