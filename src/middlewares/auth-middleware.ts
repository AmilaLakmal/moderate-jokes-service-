import { jwtConfig } from "../config/jwt-config";
import jwt from "jsonwebtoken";

export const authenticate = (req: any, res: any, next: any) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    res.status(401).json({ success: false, error: "No token provided" });
    return;
  }

  try {
    jwt.verify(token, jwtConfig.secret);
    next();
  } catch (error) {
    res.status(401).json({ success: false, error: "Invalid or expired token" });
    return;
  }
};
