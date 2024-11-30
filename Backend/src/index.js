import connectDB from "./db/index.js";
import { server } from "./app.js";
import {Server} from "socket.io";

const io = new Server(server)

io.on("connection", (socket) => {
  console.log("New Connection")
})

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
