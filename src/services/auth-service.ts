import { jwtConfig } from "../config/jwt-config";
import jwt from "jsonwebtoken";
import User from "../models/user-model";

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ userId: user._id }, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn,
  });

  return token;
};
