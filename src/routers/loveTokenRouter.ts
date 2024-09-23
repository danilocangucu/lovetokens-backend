import { Router } from "express";
import { fetchFeaturedLoveTokens } from "../controllers/loveTokenController";

const router = Router();

router.get("/featured-love-tokens", fetchFeaturedLoveTokens);

export default router;
