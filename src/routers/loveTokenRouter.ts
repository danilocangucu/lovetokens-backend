import { Router } from "express";
import { fetchFeaturedLoveTokens } from "../controllers/loveTokenController";

const router = Router();

router.get("/featured-love-tokens", fetchFeaturedLoveTokens);
// TODO implement proper health check
router.get("/health", (_, res) => {
  res.send("OK");
});

export default router;
