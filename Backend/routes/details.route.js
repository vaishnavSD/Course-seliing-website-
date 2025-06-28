import express from "express";
import adminMiddleware from "../middlewares/admin.mid.js";
import { adddetails, detail, getdetails } from "../Controllers/details.controller.js";


const router = express.Router();

router.post("/add", adminMiddleware, adddetails);

router.get("/details", getdetails);
router.get("/:detaild", detail);

export default router;