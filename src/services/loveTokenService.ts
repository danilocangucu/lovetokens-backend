import FeaturedLoveTokenModel, {
  FeaturedLoveTokenDocument,
} from "../models/FeaturedLoveToken";

export const getFeaturedLoveTokens = async (): Promise<
  FeaturedLoveTokenDocument[]
> => {
  try {
    return await FeaturedLoveTokenModel.find().exec();
  } catch (error) {
    console.error("Error retrieving featured love tokens:", error);
    throw new Error("Error retrieving featured love tokens");
  }
};
