import { authController } from "../controllers/auth-controller";
import express from "express";

const router = express.Router();

router.post("/login", authController.logIn);

export default router;
