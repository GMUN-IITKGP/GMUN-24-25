import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

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



//routes
import userRoutes from "./routes/User.routes.js";
import qnaRoutes from "./routes/qna.routes.js";
import healthCheckRoutes from "./routes/healthCheck.routes.js";

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", qnaRoutes);
app.use("/api/v1/health", healthCheckRoutes);

// Global error handler
app.use((err, req, res, next) => {
  err.message = err.message || "Internal server error";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
});

export { app };
