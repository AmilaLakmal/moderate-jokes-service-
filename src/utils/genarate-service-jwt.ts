import jwt from "jsonwebtoken";
export async function genarateServiceJwt() {
  const secret = process.env.JWT_SECRET || "default-secret"; // Use secret from env or a fallback
  const expiresIn = process.env.JWT_EXPIRES_IN || "1h"; // Set token expiration

  const token = jwt.sign({}, secret, { expiresIn });

  console.log("Generated Token:", token);
}
