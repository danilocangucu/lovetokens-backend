import express from "express";
import cors from "cors";
import loveTokenRouter from "./routers/loveTokenRouter";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", loveTokenRouter);

export default app;
