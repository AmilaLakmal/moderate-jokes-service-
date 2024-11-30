import { jokeController } from "../controllers/joke-controller";
import express from "express";
import { authenticate } from "../middlewares/auth-middleware";

const router = express.Router();

router.post("/create", authenticate, jokeController.createNewJoke);

export default router;
