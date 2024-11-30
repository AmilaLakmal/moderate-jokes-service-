import { createJokeController } from "../controllers/joke-controller";
import express from "express";
import { authenticate } from "../middlewares/auth-middleware";

const router = express.Router();

router.post("/create", authenticate, createJokeController);

export default router;
