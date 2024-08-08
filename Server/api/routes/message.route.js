import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { addMessage } from "../Controllers/message.controller.js";

const router = express.Router();

// Use a dynamic parameter for chatId
router.post("/:chatId", verifyToken, addMessage);

export default router;
