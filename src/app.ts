import express from "express";
import { Server as SocketIoServer } from "socket.io";

const server = express();

server.use(express.json());
server.use(express.static("public"));
const expressServer = server.listen(5000, () => {
  console.log("We are running at 5000.");
});

const io = new SocketIoServer(expressServer, {});

io.on("connect", (socket) => {
  console.log(socket.id, "a user connected");
  socket.emit("welcome", "Hey, I'm glad to see you here!");
  io.emit("forAll", "this is for all sockets!!!");
  socket.on("thankYou", (data) => {
    console.log(data);
  });
});
