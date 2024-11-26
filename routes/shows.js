import express from "express";
import knexConfig from "../knexfile.js";
import knexInit from "knex"; 

const knex = knexInit(knexConfig); 
const router = express.Router();

// GET /shows 
router.get("/", async (req, res) => {
  try {
    console.log("Fetching all shows...");
    const shows = await knex("Shows").select(
      "showId",
      "name",
      "date",
      "location",
      "description",
      "imageFlyerUrl",
      "organizer"
    );
    console.log("Fetched shows:", shows);
    res.status(200).json(shows);
  } catch (error) {
    console.error("Error fetching shows:", error);
    res.status(500).json({ error: "Error fetching shows." });
  }
});

export default router;
