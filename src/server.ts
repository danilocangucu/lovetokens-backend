import mongoose from "mongoose";
import app from "./app";
import http from "http";
import dotenv from "dotenv";

dotenv.config();

const mongodbUrl = process.env.MONGODB_URL as string;
const port = process.env.PORT as string;

// TODO Compare package.json from ec2 and local

mongoose
  .connect(mongodbUrl, {
    dbName: "lovetokens",
  })
  .then(() => {
    const httpServer = http.createServer(app);

    httpServer.listen(port, () => {
      console.log("Database lovetokens is connected!");
      console.log(`HTTP Server is running on http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.log("MongDB connection error" + error);
    process.exit(1);
  });
