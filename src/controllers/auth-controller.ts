import { Request, Response } from "express";
import { login } from "../services/auth-service";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const token = await login(email, password);
    res.json({ success: true, token });
  } catch (error) {
    res.status(400).json({ success: false, error: error });
  }
};
