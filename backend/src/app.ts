import express from "express";
import eventosRoutes from "./presentation/routes/routes.js";

const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "videovigilancia-api"
  });
});

app.use("/api/eventos", eventosRoutes);

export default app;