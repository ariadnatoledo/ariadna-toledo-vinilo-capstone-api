import express from "express";
import knexConfig from "../knexfile.js";
import knexInit from "knex"; 

const knex = knexInit(knexConfig); 
const router = express.Router();

// GET /messages/:username 
router.get("/:username", async (req, res) => {
  const { username } = req.params;

  try {
    console.log(`Fetching messages for username: ${username}`);
    
    const user = await knex("Users").where({ username }).first();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const messages = await knex("Messages")
      .select("messageId", "senderId", "receiverId", "content", "timestamp", "readStatus")
      .where("senderId", user.userId)
      .orWhere("receiverId", user.userId);

    res.status(200).json({ messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Error fetching messages." });
  }
});


router.post("/messages", async (req, res) => {
    const { senderId, receiverId, content } = req.body;
  
    if (!senderId || !receiverId || !content) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    try {
      await knex("Messages").insert({
        senderId,
        receiverId,
        content,
        timestamp: new Date(),
      });
      res.status(201).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Error sending message" });
    }
  });
  
  


export default router;


