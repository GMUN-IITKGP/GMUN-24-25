import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createServer } from "node:http";

const app = express();

const server = createServer(app);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser()); // setup to send and recieve cookies

import ApiError from "./utils/ApiError.js";

app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  // Default error handler
  return res.status(500).json({ message: "Internal Server Error" });
});

//routes
import userRoutes from "./routes/User.routes.js";
import qnaRoutes from "./routes/qna.routes.js";
import healthCheckRoutes from "./routes/healthCheck.routes.js";

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", qnaRoutes);
app.use("/api/v1/health", healthCheckRoutes);

export { server };
