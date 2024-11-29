import express from "express";
import { getFriends, addFriend, removeFriend } from "../controllers/friendsController.js";

const router = express.Router();

router.get("/:userId", getFriends);

router.post("/", addFriend);

router.delete("/", removeFriend);

export default router;