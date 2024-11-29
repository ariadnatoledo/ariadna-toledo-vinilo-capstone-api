import express from "express";
import { getHomepageVinyls } from "../controllers/homepageVinylsController.js";

const router = express.Router();

router.get("/", getHomepageVinyls);

export default router;
