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

app.use((err, req, res, next) => {
  // Log error details for debugging
  console.error(err.stack);

  // Set the status code to the error's status or 500 (Internal Server Error) as a default
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  // Respond with the status code and the message
  res.status(statusCode).json({
    status: "error",
    message,
    // Optionally, you can add more details like error stack for development purposes:
    // stack: err.stack,
  });
});

//routes
import userRoutes from "./routes/User.routes.js";
import qnaRoutes from "./routes/qna.routes.js";
import healthCheckRoutes from "./routes/healthCheck.routes.js";

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", qnaRoutes);
app.use("/api/v1/health", healthCheckRoutes);

export { server };
