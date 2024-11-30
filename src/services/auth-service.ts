import { jwtConfig } from "../config/jwt-config";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/user-model";

export namespace authService {
  export async function findUserByEmail(email: string): Promise<any> {
    const user = await User.findOne({ email });

    return user;
  }
}
