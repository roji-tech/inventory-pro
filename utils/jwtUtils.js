import jwt from "jsonwebtoken";

export const decodeJwtToken = (token) => {
  try {
    const decoded = jwt.decode(token);
    if (decoded) {
      return decoded;
    }
  } catch (error) {
    console.error("Error decoding JWT token:", error);
  }

  return null;
};

export const isTokenExpired = (token) => {
  const decoded = decodeJwtToken(token);

  if (decoded && decoded.exp) {
    const currentTime = Date.now() / 1000; // Convert to seconds
    return currentTime > decoded.exp;
  }

  return true; // Treat token as expired if there's no expiration time or if decoding failed
};
