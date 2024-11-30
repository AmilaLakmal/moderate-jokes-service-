export const jwtConfig = {
  secret: process.env.JWT_SECRET || "strong-secret",
  expiresIn: "1h",
};
