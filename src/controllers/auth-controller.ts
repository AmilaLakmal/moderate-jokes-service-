import { NextFunction, Request, Response } from "express";
import { authService } from "services/auth-service";
import { jwtConfig } from "../config/jwt-config";
import jwt from "jsonwebtoken";

export namespace authController {
  export async function logIn(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
      const user = await authService.findUserByEmail(email);

      if (!user) {
        res.status(400).json({ success: false, error: "User not found" });
        return;
      }

      const isMatch = await user.matchPassword(password);

      if (!isMatch) {
        res.status(400).json({
          success: false,
          error: "Invalid email password combination",
        });
        return;
      }

      const token = jwt.sign({ userId: user._id }, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn,
      });

      res.json({ success: true, token });
      return;
    } catch (error) {
      res.status(400).json({ success: false, error: error });
      return;
    }
  }
}
