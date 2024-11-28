import express from "express";
import knexConfig from "../knexfile.js";
import knexInit from "knex";

const knex = knexInit(knexConfig);

export default (io) => {
  const router = express.Router();

  /**
   * GET /messages/:username
   */
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
        .orWhere("receiverId", user.userId)
        .orderBy("timestamp", "asc");

      res.status(200).json({ messages });
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ error: "Error fetching messages." });
    }
  });

  /**
   * POST /messages
   */
  router.post("/", async (req, res) => {
    console.log("Incoming request body:", req.body); 
  
    const { senderId, receiverUsername, content } = req.body;
  
    if (!senderId || !receiverUsername || !content) {
      console.log("Validation Error: Missing fields");
      return res.status(400).json({ error: "All fields are required" });
    }
  
    try {
      console.log("Looking for receiver with username:", receiverUsername);
      const receiver = await knex("Users").where({ username: receiverUsername }).first();
      console.log("Receiver details:", receiver);
  
      if (!receiver) {
        console.log("Receiver not found:", receiverUsername);
        return res.status(404).json({ error: "Receiver not found" });
      }
  
      const receiverId = receiver.userId;
  
      const newMessage = {senderId,
        receiverId,
        content,
        timestamp: new Date()}

      const [newMessageId] = await knex("Messages")
        .insert(newMessage)
        .select("*")
  
      console.log("Message successfully saved:", newMessage);
  
      io.emit("receive_message", newMessage);
  
      res.status(201).json({
        success: true,
        newMessage,
      });
    } catch (err) {
      console.error("Error processing the request:", err); 
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

  return router;
};


