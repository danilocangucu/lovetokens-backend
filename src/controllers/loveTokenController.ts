import { Request, Response } from "express";
import { getFeaturedLoveTokens } from "../services/loveTokenService";

export const fetchFeaturedLoveTokens = async (
  _: Request,
  res: Response
): Promise<void> => {
  try {
    const loveTokens = await getFeaturedLoveTokens();
    res.status(200).json(loveTokens);
  } catch (error) {
    console.error("Error fetching featured love tokens:", error);
    res.status(500).json({ message: "Failed to fetch featured love tokens" });
  }
};
