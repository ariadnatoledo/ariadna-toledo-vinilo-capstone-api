import knexInit from "knex";
import knexConfig from "../knexfile.js";

const knex = knexInit(knexConfig);

export const getHomepageVinyls = async (req, res) => {
  try {
    // Fetch vinyls and order randomly
    const vinyls = await knex("HomepageVinyls").select("*").orderByRaw("RAND()");
    res.status(200).json(vinyls);
  } catch (error) {
    console.error("Error fetching homepage vinyls:", error);
    res.status(500).json({ error: "Failed to fetch homepage vinyls" });
  }
};
