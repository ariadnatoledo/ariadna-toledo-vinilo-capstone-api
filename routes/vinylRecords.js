import express from "express";
import knexConfig from "../knexfile.js";
import knexInit from "knex"; 


const knex = knexInit(knexConfig); 
const router = express.Router();

router.get("/random", async (req, res) => {
  try {
    console.log("Fetching random vinyls...");
    const randomVinyls = await knex("VinylRecords")
      .select("vinylId", "userId", "title", "artist", "coverImage", "previewTrack")
      .orderByRaw("RAND()") 
      .limit(3); 
      console.log("Fetched vinyls:", randomVinyls);


    res.status(200).json(randomVinyls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching random vinyls." });
  }
});

export default router;