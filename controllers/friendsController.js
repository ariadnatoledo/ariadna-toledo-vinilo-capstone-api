import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getFriends = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const friends = await knex("Friends")
        .join("Users", "Friends.friendId", "=", "Users.userId")
        .select("Users.userId", "Users.username", "Users.avatar")
        .where("Friends.userId", userId);
  
      res.status(200).json(friends);
    } catch (error) {
      console.error("Error fetching friends:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  export const addFriend = async (req, res) => {
    const { userId, friendId } = req.body;
  
    if (!userId || !friendId) {
      return res.status(400).json({ error: "Both userId and friendId are required." });
    }
  
    try {
      const existingFriendship = await knex("Friends")
        .where({ userId, friendId })
        .first();
  
      if (existingFriendship) {
        return res.status(400).json({ error: "Friendship already exists." });
      }
  
      await knex("Friends").insert({ userId, friendId });
  
      res.status(201).json({ success: true, message: "Friend added successfully." });
    } catch (error) {
      console.error("Error adding friend:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  export const removeFriend = async (req, res) => {
    const { userId, friendId } = req.body;
  
    if (!userId || !friendId) {
      return res.status(400).json({ error: "Both userId and friendId are required." });
    }
  
    try {
      await knex("Friends")
        .where({ userId, friendId })
        .orWhere({ userId: friendId, friendId: userId })
        .del();
      res.status(200).json({ success: true, message: "Friend removed successfully." });
    } catch (error) {
      console.error("Error removing friend:", error);
      res.status(500).json({ error: "Failed to remove friend" });
    }
  };