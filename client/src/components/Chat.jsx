// import React, { useState } from 'react';
// import Draggable from 'react-draggable';

// const Chat = ({chats}) => {
//   const [selectedChat, setSelectedChat] = useState(null);

//   console.log(chats);
//   const messages = [
//     { id: 1, name: 'John Doe', text: 'Hi there! How are you?.....' },
//     { id: 2, name: 'Jane Smith', text: 'Can you provide more....' },
//     { id: 3, name: 'Emily Johnson', text: 'Is the pro....' },
//     { id: 4, name: 'Michael Brown', text: 'I have a few questio....' },
//     { id: 5, name: 'Lisa White', text: 'Can we schedule a v....' },
//   ];

//   const chatMessages = [
//     { id: 1, sender: 'John Doe', text: 'Lorem ipsum dolor sit amet.', time: '1 hour ago', sent: true, backgroundColor: 'bg-gray-200' },
//     { id: 2, sender: 'You', text: 'Lorem ipsum dolor sit amet.', time: '1 hour ago', sent: false, backgroundColor: 'bg-yellow-100' },
//     { id: 3, sender: 'John Doe', text: 'Another message from John.', time: '30 minutes ago', sent: true, backgroundColor: 'bg-gray-200' },
//     { id: 4, sender: 'You', text: 'Another response from you.', time: '15 minutes ago', sent: false, backgroundColor: 'bg-yellow-100' },
//     // Add more chat messages here
//   ];

//   const handleChatClick = (message) => {
//     setSelectedChat(message);
//   };

//   return (
//     <div className="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//       <h2 className="text-3xl font-light mb-4">Messages</h2>
//       <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//         <div className="space-y-4">
//           {messages.slice(0, 3).map((message) => (
//             <div
//               key={message.id}
//               className="message-container bg-white p-4 rounded shadow flex items-center space-x-4 cursor-pointer"
//               onClick={() => handleChatClick(message)}
//             >
//               <img
//                 className="w-10 h-10 rounded-full"
//                 src="https://images.pexels.com/photos/20094341/pexels-photo-20094341/free-photo-of-portrait-of-man-wearing-brown-cap.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Avatar"
//               />
//               <div className="flex gap-4 text-sm">
//                 <span className="font-semibold">{message.name}</span>
//                 <p className="text-sm">{message.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {selectedChat && (
//         <Draggable>
//           <div className="fixed flex flex-col h-72 w-96 mt-4 border rounded-lg shadow-lg bg-white z-50">
//             <div className="bg-yellow-300 p-4 flex justify-between items-center cursor-move">
//               <div className="flex items-center">
//                 <img
//                   className="w-8 h-8 rounded-full mr-2"
//                   src="https://images.pexels.com/photos/20094341/pexels-photo-20094341/free-photo-of-portrait-of-man-wearing-brown-cap.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Avatar"
//                 />
//                 <span className="font-bold">{selectedChat.name}</span>
//               </div>
//               <button
//                 className="text-xl font-bold"
//                 onClick={() => setSelectedChat(null)}
//               >
//                 X
//               </button>
//             </div>
//             <div className="flex-1 p-4 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//               <div className="space-y-4">
//                 {chatMessages.map((msg, index) => (
//                   <div
//                     key={msg.id}
//                     className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'} space-y-1`}
//                   >
//                     <div
//                       className={`${msg.backgroundColor} p-2 rounded-lg max-w-xs text-sm`}
//                     >
//                       {msg.text}
//                     </div>
//                     <span className="text-xs text-gray-500">{msg.time}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="p-4 bg-white border-t flex items-center space-x-2">
//               <input
//                 type="text"
//                 placeholder="Type a message..."
//                 className="w-full p-2 border rounded-lg"
//               />
//               <button className="bg-yellow-500 text-white p-2 rounded-lg">Send</button>
//             </div>
//           </div>
//         </Draggable>
//       )}
//       <div className={`max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded mt-4 ${selectedChat ? 'mt-8' : ''}`}>
//         <div className="space-y-4">
//           {messages.slice(3).map((message) => (
//             <div
//               key={message.id}
//               className="message-container bg-white p-4 rounded shadow flex items-center space-x-4 cursor-pointer"
//               onClick={() => handleChatClick(message)}
//             >
//               <img
//                 className="w-10 h-10 rounded-full"
//                 src="https://images.pexels.com/photos/20094341/pexels-photo-20094341/free-photo-of-portrait-of-man-wearing-brown-cap.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Avatar"
//               />
//               <div className="flex gap-4 text-sm">
//                 <span className="font-semibold">{message.name}</span>
//                 <p className="text-sm">{message.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;



// import React, { useState, useEffect, useRef, useContext } from "react";
// import Draggable from "react-draggable";
// import { AuthContext } from "../context/AuthContext";
// import apiRequest from "../lib/apiRequest";
// import { format } from "timeago.js";
// import { SocketContext } from "../context/SocketContext";

// const Chat = ({ chats }) => {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { currentUser } = useContext(AuthContext);
//   const { socket } = useContext(SocketContext);
//   const messageEndRef = useRef();

//   useEffect(() => {
//     messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [selectedChat]);

//   useEffect(() => {
//     if (selectedChat && socket) {
//       const read = async () => {
//         try {
//           await apiRequest.put("/chats/read/" + selectedChat.id);
//         } catch (err) {
//           console.log(err);
//         }
//       };

//       socket.on("getMessage", (data) => {
//         if (selectedChat.id === data.chatId) {
//           setSelectedChat((prev) => ({
//             ...prev,
//             messages: [...prev.messages, data]
//           }));
//           read();
//         }
//       });

//       return () => {
//         socket.off("getMessage");
//       };
//     }
//   }, [socket, selectedChat]);

//   const handleChatClick = async (chat) => {
//     setLoading(true);
//     try {
//       const res = await apiRequest.get("/chats/" + chat.id);
//       if (!res.data.seenBy.includes(currentUser.id)) {
//         // Make sure 'decrease' function is defined or remove this line if not needed
//         // decrease();
//       }
//       setSelectedChat({ ...res.data, receiver: chat.receiver });
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const text = formData.get("text");

//     if (!text) return;

//     try {
//       const res = await apiRequest.post("/messages/" + selectedChat.id, {
//         text,
//       });
//       setSelectedChat((prev) => ({
//         ...prev,
//         messages: [...prev.messages, res.data],
//         lastMessage: text,
//         lastSenderId: currentUser.id,
//       }));
//       e.target.reset();
     
//       socket.emit("sendMessage", {
//         receiverId: selectedChat.receiver.id,
//         data: res.data,
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const isCurrentUserSender = (senderId) => {
//     return senderId === currentUser.id;
//   };

//   return (
//     <div className="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//       <h2 className="text-3xl font-light mb-4">Messages</h2>
//       <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//         <div className="space-y-4">
//           {chats?.map((chat) => (
//             <div
//               key={chat.id}
//               className="message-container bg-white p-4 rounded shadow flex items-center space-x-4 cursor-pointer"
//               onClick={() => handleChatClick(chat)}
//             >
//               <img
//                 className="w-10 h-10 rounded-full"
//                 src={chat.receiver.avatar || "/noAvatar.png"}
//                 alt="Avatar"
//               />
//               <div className="flex gap-4 text-sm">
//                 <span className="font-semibold">{chat.receiver.username}</span>
//                 <p className="text-sm">{chat.lastMessage}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {selectedChat && (
//         <Draggable>
//           <div className="fixed flex flex-col h-96 w-96 mt-4 border rounded-lg shadow-lg bg-white z-50">
//             <div className="bg-yellow-400 p-4 flex justify-between items-center cursor-move">
//               <div className="flex items-center">
//                 <img
//                   className="w-8 h-8 rounded-full mr-2"
//                   src={selectedChat.receiver.avatar || "/noAvatar.png"}
//                   alt="Avatar"
//                 />
//                 <span className="font-bold">
//                   {selectedChat.receiver.username}
//                 </span>
//               </div>
//               <button
//                 className="text-xl font-bold"
//                 onClick={() => setSelectedChat(null)}
//               >
//                 X
//               </button>
//             </div>
//             <div className="flex-1 p-4 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//               {loading ? (
//                 <div className="flex justify-center items-center h-full">
//                   <span>Loading...</span>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {selectedChat.messages.map((message, index) => (
//                     <div
//                       key={index}
//                       className={`flex flex-col ${
//                         isCurrentUserSender(message.senderId)
//                           ? "items-end"
//                           : "items-start"
//                       } space-y-1`}
//                     >
//                       <div
//                         className={`p-2 rounded-lg max-w-xs text-sm ${
//                           isCurrentUserSender(message.senderId)
//                             ? "bg-yellow-100"
//                             : "bg-gray-200"
//                         }`}
//                       >
//                         {message.text}
//                       </div>
//                       <span className="text-xs text-gray-500">
//                         {format(message.createdAt)}
//                       </span>
//                     </div>
//                   ))}
//                   <div ref={messageEndRef}></div>
//                 </div>
//               )}
//             </div>
//             <form
//               onSubmit={handleSendMessage}
//               className="p-4 bg-white border-t flex items-center space-x-2"
//             >
//               <input
//                 type="text"
//                 name="text"
//                 placeholder="Type a message..."
//                 className="w-full p-2 border rounded-lg"
//               />
//               <button className="bg-yellow-500 text-white p-2 rounded-lg">
//                 Send
//               </button>
//             </form>
//           </div>
//         </Draggable>
//       )}
//     </div>
//   );
// };

// export default Chat;




// Chat.js
// import React, { useState, useEffect, useRef } from "react";
// import Draggable from "react-draggable";
// import apiRequest from "../lib/apiRequest";
// import { format } from "timeago.js";

// const Chat = ({ chat, onClose, socket }) => {
//   const [messages, setMessages] = useState(chat.messages || []);
//   const [loading, setLoading] = useState(false);
//   const messageEndRef = useRef();

//   useEffect(() => {
//     messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   useEffect(() => {
//     if (socket) {
//       socket.on("getMessage", (data) => {
//         if (chat.id === data.chatId) {
//           setMessages((prev) => [...prev, data]);
//         }
//       });

//       return () => {
//         socket.off("getMessage");
//       };
//     }
//   }, [socket, chat.id]);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const text = formData.get("text");

//     if (!text) return;

//     try {
//       const res = await apiRequest.post(`/messages/${chat.id}`, { text });
//       setMessages((prev) => [...prev, res.data]);
//       e.target.reset();
     
//       socket.emit("sendMessage", {
//         receiverId: chat.receiver.id,
//         data: res.data,
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <Draggable>
//       <div className="fixed flex flex-col h-96 w-96 bottom-4 right-4 border rounded-lg shadow-lg bg-white z-50">
//         <div className="bg-yellow-400 p-4 flex justify-between items-center cursor-move">
//           <div className="flex items-center">
//             <img
//               className="w-8 h-8 rounded-full mr-2"
//               src={chat.receiver.avatar || "/noAvatar.png"}
//               alt="Avatar"
//             />
//             <span className="font-bold">{chat.receiver.username}</span>
//           </div>
//           <button className="text-xl font-bold" onClick={onClose}>X</button>
//         </div>
//         <div className="flex-1 p-4 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//           {loading ? (
//             <div className="flex justify-center items-center h-full">
//               <span>Loading...</span>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {messages.map((message, index) => (
//                 <div
//                   key={index}
//                   className={`flex flex-col ${
//                     message.senderId === chat.userIDs[0] ? "items-end" : "items-start"
//                   } space-y-1`}
//                 >
//                   <div
//                     className={`p-2 rounded-lg max-w-xs text-sm ${
//                       message.senderId === chat.userIDs[0] ? "bg-yellow-100" : "bg-gray-200"
//                     }`}
//                   >
//                     {message.text}
//                   </div>
//                   <span className="text-xs text-gray-500">
//                     {format(message.createdAt)}
//                   </span>
//                 </div>
//               ))}
//               <div ref={messageEndRef}></div>
//             </div>
//           )}
//         </div>
//         <form
//           onSubmit={handleSendMessage}
//           className="p-4 bg-white border-t flex items-center space-x-2"
//         >
//           <input
//             type="text"
//             name="text"
//             placeholder="Type a message..."
//             className="w-full p-2 border rounded-lg"
//           />
//           <button className="bg-yellow-500 text-white p-2 rounded-lg">
//             Send
//           </button>
//         </form>
//       </div>
//     </Draggable>
//   );
// };

// export default Chat;



// import React, { useState, useEffect, useRef, useContext } from "react";
// import Draggable from "react-draggable";
// import { AuthContext } from "../context/AuthContext";
// import apiRequest from "../lib/apiRequest";
// import { format } from "timeago.js";
// import { SocketContext } from "../context/SocketContext";

// const Chat = ({ chats }) => {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const { currentUser } = useContext(AuthContext);
//   const { socket } = useContext(SocketContext);
//   const messageEndRef = useRef();

//   // Scroll to bottom when selectedChat changes
//   useEffect(() => {
//     if (selectedChat) {
//       messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [selectedChat]);

//   // Handle receiving new messages
//   useEffect(() => {
//     if (socket) {
//       const handleMessage = (data) => {
//         if (selectedChat && selectedChat.id === data.chatId) {
//           setSelectedChat((prev) => ({
//             ...prev,
//             messages: [...(prev?.messages || []), data],
//           }));
//           // Mark chat as read when a new message arrives
//           if (selectedChat.id === data.chatId) {
//             apiRequest.put("/chats/read/" + selectedChat.id).catch((err) =>
//               console.log("Error marking chat as read:", err)
//             );
//           }
//         }
//       };

//       socket.on("getMessage", handleMessage);

//       return () => {
//         socket.off("getMessage", handleMessage);
//       };
//     }
//   }, [socket, selectedChat]);

//   // Handle chat selection
//   const handleChatClick = async (chat) => {
//     setLoading(true);
//     try {
//       const res = await apiRequest.get("/chats/" + chat.id);
//       if (!res.data.seenBy.includes(currentUser.id)) {
//         // Example function for decreasing unread count, adjust as needed
//         // decrease();
//       }
//       setSelectedChat({ ...res.data, receiver: chat.receiver });
//     } catch (err) {
//       console.error("Error fetching chat data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle sending messages
//   const handleSendMessage = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const text = formData.get("text");

//     if (!text) return;

//     try {
//       const res = await apiRequest.post("/messages/" + selectedChat.id, {
//         text,
//       });
//       setSelectedChat((prev) => ({
//         ...prev,
//         messages: [...(prev?.messages || []), res.data],
//         lastMessage: text,
//         lastSenderId: currentUser.id,
//       }));
//       e.target.reset();
      
//       // Emit the message to the server
//       socket.emit("sendMessage", {
//         receiverId: selectedChat.receiver.id,
//         data: res.data,
//       });
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   // Check if message sender is the current user
//   const isCurrentUserSender = (senderId) => {
//     return senderId === currentUser.id;
//   };

//   return (
//     <div className="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//       <h2 className="text-3xl font-light mb-4">Messages</h2>
//       <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//         <div className="space-y-4">
//           {chats?.map((chat) => (
//             <div
//               key={chat.id}
//               className="message-container bg-white p-4 rounded shadow flex items-center space-x-4 cursor-pointer"
//               onClick={() => handleChatClick(chat)}
//             >
//               <img
//                 className="w-10 h-10 rounded-full"
//                 src={chat.receiver.avatar || "/noAvatar.png"}
//                 alt="Avatar"
//               />
//               <div className="flex gap-4 text-sm">
//                 <span className="font-semibold">{chat.receiver.username}</span>
//                 <p className="text-sm">{chat.lastMessage}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {selectedChat && (
//         <Draggable>
//           <div className="fixed flex flex-col h-96 w-96 mt-4 border rounded-lg shadow-lg bg-white z-50">
//             <div className="bg-yellow-400 p-4 flex justify-between items-center cursor-move">
//               <div className="flex items-center">
//                 <img
//                   className="w-8 h-8 rounded-full mr-2"
//                   src={selectedChat.receiver.avatar || "/noAvatar.png"}
//                   alt="Avatar"
//                 />
//                 <span className="font-bold">
//                   {selectedChat.receiver.username}
//                 </span>
//               </div>
//               <button
//                 className="text-xl font-bold"
//                 onClick={() => setSelectedChat(null)}
//               >
//                 X
//               </button>
//             </div>
//             <div className="flex-1 p-4 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//               {loading ? (
//                 <div className="flex justify-center items-center h-full">
//                   <span>Loading...</span>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {selectedChat.messages.map((message, index) => (
//                     <div
//                       key={index}
//                       className={`flex flex-col ${
//                         isCurrentUserSender(message.senderId)
//                           ? "items-end"
//                           : "items-start"
//                       } space-y-1`}
//                     >
//                       <div
//                         className={`p-2 rounded-lg max-w-xs text-sm ${
//                           isCurrentUserSender(message.senderId)
//                             ? "bg-yellow-100"
//                             : "bg-gray-200"
//                         }`}
//                       >
//                         {message.text}
//                       </div>
//                       <span className="text-xs text-gray-500">
//                         {format(message.createdAt)}
//                       </span>
//                     </div>
//                   ))}
//                   <div ref={messageEndRef}></div>
//                 </div>
//               )}
//             </div>
//             <form
//               onSubmit={handleSendMessage}
//               className="p-4 bg-white border-t flex items-center space-x-2"
//             >
//               <input
//                 type="text"
//                 name="text"
//                 placeholder="Type a message..."
//                 className="w-full p-2 border rounded-lg"
//               />
//               <button className="bg-yellow-500 text-white p-2 rounded-lg">
//                 Send
//               </button>
//             </form>
//           </div>
//         </Draggable>
//       )}
//     </div>
//   );
// };

// export default Chat;


// import React, { useState, useEffect, useRef, useContext } from "react";
// import Draggable from "react-draggable";
// import { AuthContext } from "../context/AuthContext";
// import apiRequest from "../lib/apiRequest";
// import { format } from "timeago.js";
// import { SocketContext } from "../context/SocketContext";
// import { useNotificationStore } from "../lib/notificationStore";

// const Chat = ({ chats = [] }) => { // Default to empty array
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [refresh, setRefresh] = useState('');
//   const { currentUser } = useContext(AuthContext);
//   const { socket } = useContext(SocketContext);
//   const messageEndRef = useRef();
//  console.log(chats)

//   // const handleMessage = (data) => {
//       //   if (selectedChat && selectedChat.id === data.chatId) {
//       //     setSelectedChat((prev) => ({
//       //       ...prev,
//       //       messages: [...(prev?.messages || []), data],
//       //     }));
//       //     // Mark chat as read when a new message arrives
//       //     if (selectedChat.id === data.chatId) {
//       //       apiRequest.put("/chats/read/" + selectedChat.id).catch((err) =>
//       //         console.log("Error marking chat as read:", err)
//       //       );
//       //     }
//       //   }
//       // };
//  const decrease = useNotificationStore((state) => state.decrease);
//   // Scroll to bottom when selectedChat changes
//   useEffect(() => {
//     if (selectedChat) {
//       messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [selectedChat,chats]);

//   // Handle receiving new messages
//   useEffect(() => {
//     if (socket) {
    
//       const handleMessage = (data) => {
//         console.log("Received message:", data);
//         if(data)
//           {
// setRefresh(data)
//           } // Debugging line
//         if (selectedChat && selectedChat.id === data.chatId) {
//           setSelectedChat((prev) => ({
//             ...prev,
//             messages: [...(prev?.messages || []), data],
//           }));
//           // Mark chat as read when a new message arrives
//           apiRequest.put("/chats/read/" + selectedChat.id).catch((err) =>
//             console.log("Error marking chat as read:", err)
//           );
//         }
//       };
      
//       socket.on("getMessage", handleMessage);

//       return () => {
//         socket.off("getMessage", handleMessage);
//       };
//     }
//   }, [socket, selectedChat,refresh]);

//   // Handle chat selection
//   const handleChatClick = async (chat) => {
//     setLoading(true);
//     try {
//       const res = await apiRequest.get("/chats/" + chat.id);
//       if (!res.data.seenBy.includes(currentUser.id)) {
//         decrease();
//       }
//       setSelectedChat({ ...res.data, receiver: chat.receiver });
//     } catch (err) {
//       console.error("Error fetching chat data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle sending messages
//   const handleSendMessage = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const text = formData.get("text");

//     if (!text) return;

//     try {
//       const res = await apiRequest.post("/messages/" + selectedChat.id, {
//         text,
//       });
//       setSelectedChat((prev) => ({
//         ...prev,
//         messages: [...(prev?.messages || []), res.data],
//         lastMessage: text,
//         lastSenderId: currentUser.id,
//       }));
//       e.target.reset();
      
//       // Emit the message to the server
//       socket.emit("sendMessage", {
//         receiverId: selectedChat.receiver.id,
//         data: res.data,
//       });
//     } catch (err) {
//       console.error("Error sending message:", err);
//     }
//   };

//   // Check if message sender is the current user
//   const isCurrentUserSender = (senderId) => {
//     return senderId === currentUser.id;
//   };

//   return (
//     <div className="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//       <h2 className="text-3xl font-light mb-4">Messages</h2>
//       <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//         <div className="space-y-4">
//           {Array.isArray(chats) && chats.length > 0 ? (
//             chats.map((chat) => (
//               <div
//                 key={chat.id}
//                 className="message-container bg-white p-4 rounded shadow flex items-center space-x-4 cursor-pointer"
//                 onClick={() => handleChatClick(chat)}
//               >
//                 <img
//                   className="w-10 h-10 rounded-full"
//                   src={chat.receiver.avatar || "/noAvatar.png"}
//                   alt="Avatar"
//                 />
//                 <div className="flex gap-4 text-sm">
//                   <span className="font-semibold">{chat.receiver.username}</span>
//                   <p className="text-sm">{chat.lastMessage}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No chats available</p>
//           )}
//         </div>
//       </div>
//       {selectedChat && (
//         <Draggable>
//           <div className="fixed flex flex-col h-96 w-96 mt-4 border rounded-lg shadow-lg bg-white z-50">
//             <div className="bg-yellow-400 p-4 flex justify-between items-center cursor-move">
//               <div className="flex items-center">
//                 <img
//                   className="w-8 h-8 rounded-full mr-2"
//                   src={selectedChat.receiver.avatar || "/noAvatar.png"}
//                   alt="Avatar"
//                 />
//                 <span className="font-bold">
//                   {selectedChat.receiver.username}
//                 </span>
//               </div>
//               <button
//                 className="text-xl font-bold"
//                 onClick={() => setSelectedChat(null)}
//               >
//                 X
//               </button>
//             </div>
//             <div className="flex-1 p-4 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
//               {loading ? (
//                 <div className="flex justify-center items-center h-full">
//                   <span>Loading...</span>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {selectedChat.messages.map((message, index) => (
//                     <div
//                       key={index}
//                       className={`flex flex-col ${
//                         isCurrentUserSender(message.senderId)
//                           ? "items-end"
//                           : "items-start"
//                       } space-y-1`}
//                     >
//                       <div
//                         className={`p-2 rounded-lg max-w-xs text-sm ${
//                           isCurrentUserSender(message.senderId)
//                             ? "bg-yellow-100"
//                             : "bg-gray-200"
//                         }`}
//                       >
//                         {message.text}
//                       </div>
//                       <span className="text-xs text-gray-500">
//                         {format(message.createdAt)}
//                       </span>
//                     </div>
//                   ))}
//                   <div ref={messageEndRef}></div>
//                 </div>
//               )}
//             </div>
//             <form
//               onSubmit={handleSendMessage}
//               className="p-4 bg-white border-t flex items-center space-x-2"
//             >
//               <input
//                 type="text"
//                 name="text"
//                 placeholder="Type a message..."
//                 className="w-full p-2 border rounded-lg"
//               />
//               <button className="bg-yellow-500 text-white p-2 rounded-lg">
//                 Send
//               </button>
//             </form>
//           </div>
//         </Draggable>
//       )}
//     </div>
//   );
// };

// export default Chat;


import React, { useState, useEffect, useRef, useContext } from "react";
import Draggable from "react-draggable";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../context/SocketContext";
import { useNotificationStore } from "../lib/notificationStore";

const Chat = ({ chats: initialChats = [] }) => {
  const [chats, setChats] = useState(initialChats);
  const [selectedChat, setSelectedChat] = useState(null);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const messageEndRef = useRef();
  const decrease = useNotificationStore((state) => state.decrease);

  useEffect(() => {
    if (selectedChat) {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedChat, chats]);

  useEffect(() => {
    if (socket) {
      const handleMessage = (data) => {
        console.log("Received message:", data);
        
        setChats(prevChats => {
          return prevChats.map(chat => {
            if (chat.id === data.chatId) {
              const updatedMessages = [...(chat.messages || []), data];
              return {
                ...chat,
                lastMessage: data.text,
                messages: updatedMessages
              };
            }
            return chat;
          });
        });

        setSelectedChat(prevSelectedChat => {
          if (prevSelectedChat && prevSelectedChat.id === data.chatId) {
            return {
              ...prevSelectedChat,
              messages: [...(prevSelectedChat.messages || []), data],
              lastMessage: data.text
            };
          }
          return prevSelectedChat;
        });

        if (selectedChat && selectedChat.id === data.chatId) {
          apiRequest.put("/chats/read/" + data.chatId).catch((err) =>
            console.log("Error marking chat as read:", err)
          );
        }
      };
      
      socket.on("getMessage", handleMessage);

      return () => {
        socket.off("getMessage", handleMessage);
      };
    }
  }, [socket, selectedChat]);

  const handleChatClick = async (chat) => {
    setLoading(true);
    try {
      const res = await apiRequest.get("/chats/" + chat.id);
      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease();
      }
      setSelectedChat({ ...res.data, receiver: chat.receiver });
      
      setChats(prevChats => prevChats.map(c => 
        c.id === chat.id ? { ...c, messages: res.data.messages } : c
      ));
    } catch (err) {
      console.error("Error fetching chat data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text) return;

    try {
      const res = await apiRequest.post("/messages/" + selectedChat.id, {
        text,
      });
      
      const newMessage = {
        ...res.data,
        senderId: currentUser.id,
      };

      setSelectedChat((prev) => ({
        ...prev,
        messages: [...(prev?.messages || []), newMessage],
        lastMessage: text,
        lastSenderId: currentUser.id,
      }));
      
      setChats(prevChats => prevChats.map(chat => 
        chat.id === selectedChat.id 
          ? { 
              ...chat, 
              lastMessage: text, 
              messages: [...(chat.messages || []), newMessage] 
            } 
          : chat
      ));

      e.target.reset();
      
      socket.emit("sendMessage", {
        receiverId: selectedChat.receiver.id,
        data: newMessage,
      });
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  const isCurrentUserSender = (senderId) => {
    return senderId === currentUser.id;
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
      <h2 className="text-3xl font-light mb-4">Messages</h2>
      <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
        <div className="space-y-4">
          {chats.length > 0 ? (
            chats.map((chat) => (
              <div
                key={chat.id}
                className="message-container bg-white p-4 rounded shadow flex items-center space-x-4 cursor-pointer"
                onClick={() => handleChatClick(chat)}
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={chat.receiver.avatar || "/noAvatar.png"}
                  alt="Avatar"
                />
                <div className="flex gap-4 text-sm">
                  <span className="font-semibold">{chat.receiver.username}</span>
                  <p className="text-sm">{chat.lastMessage}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No chats available</p>
          )}
        </div>
      </div>
      {selectedChat && (
        <Draggable>
          <div className="fixed flex flex-col h-96 w-96 mt-4 border rounded-lg shadow-lg bg-white z-50">
            <div className="bg-yellow-400 p-4 flex justify-between items-center cursor-move">
              <div className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={selectedChat.receiver.avatar || "/noAvatar.png"}
                  alt="Avatar"
                />
                <span className="font-bold">
                  {selectedChat.receiver.username}
                </span>
              </div>
              <button
                className="text-xl font-bold"
                onClick={() => setSelectedChat(null)}
              >
                X
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-rounded">
              {loading ? (
                <div className="flex justify-center items-center h-full">
                  <span>Loading...</span>
                </div>
              ) : (
                <div className="space-y-4">
                  {selectedChat.messages && selectedChat.messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex flex-col ${
                        isCurrentUserSender(message.senderId)
                          ? "items-end"
                          : "items-start"
                      } space-y-1`}
                    >
                      <div
                        className={`p-2 rounded-lg max-w-xs text-sm ${
                          isCurrentUserSender(message.senderId)
                            ? "bg-yellow-100"
                            : "bg-gray-200"
                        }`}
                      >
                        {message.text}
                      </div>
                      <span className="text-xs text-gray-500">
                        {format(message.createdAt)}
                      </span>
                    </div>
                  ))}
                  <div ref={messageEndRef}></div>
                </div>
              )}
            </div>
            <form
              onSubmit={handleSendMessage}
              className="p-4 bg-white border-t flex items-center space-x-2"
            >
              <input
                type="text"
                name="text"
                placeholder="Type a message..."
                className="w-full p-2 border rounded-lg"
              />
              <button className="bg-yellow-500 text-white p-2 rounded-lg">
                Send
              </button>
            </form>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default Chat;