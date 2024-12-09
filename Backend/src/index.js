import connectDB from "./db/index.js";
import { server } from "./app.js";
import { Server } from "socket.io";

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("New User Connected", socket.id);
  socket.on("message", (msg) => {
    console.log(msg);
    socket.broadcast.emit("receive-message", msg);
  });
});

connectDB()
  .then(() => {
    server.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!!", err);
    process.exit(1);
  });
