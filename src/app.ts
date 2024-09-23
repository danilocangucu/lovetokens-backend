import express from "express";
import loveTokenRouter from "./routers/loveTokenRouter";

const app = express();

app.use(express.json());

app.use("/api", loveTokenRouter);

export default app;
