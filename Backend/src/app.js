import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {createServer} from "node:http";

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

//routes
import userRoutes from "./routes/User.routes.js";

app.use("/api/v1/users", userRoutes);

export { server };
