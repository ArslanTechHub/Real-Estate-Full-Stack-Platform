// import { Server } from "socket.io";

// const io = new Server({
//   cors: {
//     origin: "http://localhost:5173",
//   },
// });

// let onlineUser = [];

// const addUser = (userId, socketId) => {
//   const userExist = onlineUser.find((user) => user.userId === userId);
//   if (!userExist) {
//     onlineUser.push({ userId, socketId });
//   } else {
//     userExist.socketId = socketId;
//   }
//   console.log("Online users:", onlineUser);
// };

// const removeUser = (socketId) => {
//   onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
//   console.log("Online users after removal:", onlineUser);
// };

// const getUser = (userId) => {
//   return onlineUser.find((user) => user.userId === userId);
// };

// io.on("connection", (socket) => {
//   socket.on("newUser", (userId) => {
//     addUser(userId, socket.id);
//     console.log(onlineUser);
//   });

//   socket.on("sendMessage", ({ receiverId, data }) => {
//     const receiver = getUser(receiverId);
//     if (receiver) {
//       io.to(receiver.socketId).emit("getMessage", data);
//     }
//   });

//   socket.on("disconnect", () => {
//     removeUser(socket.id);
//   });
// });

// io.listen(4000);

import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "https://real-estate-full-stack-platform.onrender.com",
  },
});

let onlineUsers = [];

// Add a user to the onlineUsers array
const addUser = (userId, socketId) => {
  const userExist = onlineUsers.find((user) => user.userId === userId);
  if (!userExist) {
    onlineUsers.push({ userId, socketId });
  } else {
    userExist.socketId = socketId;
  }
  console.log("User added:", { userId, socketId });
  console.log("Online users after addition:", JSON.stringify(onlineUsers, null, 2));
};

// Remove a user from the onlineUsers array
const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
  console.log("User removed with socket ID:", socketId);
  console.log("Online users after removal:", JSON.stringify(onlineUsers, null, 2));
};

// Get a user by userId
const getUser = (userId) => {
  return onlineUsers.find((user) => user.userId === userId);
};

// io.on("connection", (socket) => {
//   console.log(`User connected: ${socket.id}`);

io.on("connection", (socket) => {
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", onlineUsers);
  });
  // Handle new user connection
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", onlineUsers);
  });

  // Handle message sending
  socket.on("sendMessage", ({ receiverId, data }) => {
    const user = getUser(receiverId);
    if (user) {
      console.log(`Sending message to user: ${user.userId}`);
      io.to(user.socketId).emit("getMessage", data);
      console.log(`message sent`);
    }
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    removeUser(socket.id);
    io.emit("getUsers", onlineUsers);
  });
});

io.listen(4000);
