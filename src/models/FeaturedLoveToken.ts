import mongoose, { Document, Schema } from "mongoose";
import { LoveTokenData } from "../types/LoveTokenData";

export interface FeaturedLoveTokenDocument extends LoveTokenData, Document {}

const LoveTokenSchema: Schema = new mongoose.Schema(
  {
    createdBy: {
      userName: { type: String, required: true },
      userId: { type: String, required: true },
    },
    labels: [{ type: String, required: true }],
    phrase: { type: String, required: true },
    creationDate: { type: Date, default: Date.now, required: true },
    tokenNumber: { type: Number, required: true },
  },
  { collection: "featuredlovetokens" }
);

export default mongoose.model<FeaturedLoveTokenDocument>(
  "FeaturedLoveToken",
  LoveTokenSchema
);
