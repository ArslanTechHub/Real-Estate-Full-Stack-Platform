// import React, { useState, useEffect, useContext } from "react";
// import Slider from "../components/Slider";
// import "leaflet/dist/leaflet.css";
// import TinyMap from "../components/TinyMap";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import apiRequest from "../lib/apiRequest";

// const SinglePage = () => {
//   const post = useLoaderData();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [saved, setSaved] = useState(post.isSaved);
//   const { currentUser } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(true); // State to control TinyMap visibility

//   const handleSave = async () => {
//     if (!currentUser) {
//       navigate("/login");
//       return;
//     }
//     // Optimistic UI update
//     setSaved((prev) => !prev);
//     try {
//       await apiRequest.post("/users/save", { postId: post.id });
//     } catch (err) {
//       console.log(err);
//       setSaved((prev) => !prev); // Roll back on error
//     }
//   };

//   useEffect(() => {
//     if (post) {
//       setLoading(false);
//     } else {
//       setError("Failed to load post data.");
//     }
//   }, [post]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="flex h-screen bg-white">
//       <div className="flex w-full">
//         {/* Left Section */}
//         <div className="flex justify-center p-4 w-[60%]">
//           <div className="flex w-full ml-4">
//             <div className="flex flex-col w-full">
//               {/* Slider Component for Property Images */}
//               <Slider images={post.images} setShowMap={setShowMap} />
//               {/* Property Title, Address, Price, and Owner Info */}
//               <div className="flex justify-between items-center mb-4">
//                 <div className="flex flex-col">
//                   <h1 className="text-xl font-bold">{post.title}</h1>
//                   <div className="flex items-center mt-2">
//                     <img
//                       src="/pin.png"
//                       alt="Location pin"
//                       className="w-3 h-3 mr-2"
//                     />
//                     <span className="text-sm text-gray-600">
//                       {post.address}
//                     </span>
//                   </div>
//                   <div className="text-md font-semibold mt-3">
//                     <span className="bg-yellow-300 px-2 py-1 rounded-lg">
//                       ${post.price}
//                     </span>
//                   </div>
//                 </div>
//                 {/* Owner Information */}
//                 <div className="flex flex-col items-center px-5 py-3 bg-yellow-300 bg-opacity-20 rounded-lg">
//                   <img
//                     className="w-10 h-10 rounded-full object-cover bg-yellow-300 mb-2"
//                     src={post.user.avatar  || "noAvatar.png"}
//                     alt={post.user.username}
//                   />
//                   <span className="text-sm text-center">
//                     {post.user.username}
//                   </span>
//                 </div>
//               </div>
//               {/* Property Description */}
//               <div className="text-sm text-gray-600 mt-4 break-words">
//                 <p
//                   dangerouslySetInnerHTML={{ __html: post.postDetail.desc }}
//                 ></p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Right Section */}
//         <div className="w-[40%] bg-[#fcf5f3] p-4">
//           {/* General Information */}
//           <p className="text-md font-semibold mb-2">General</p>
//           <div className="p-4 mb-4 rounded-lg bg-white shadow-sm">
//             {/* Utility Details */}
//             <div className="flex flex-col mb-2">
//               <div className="flex items-center">
//                 <img
//                   src="/utility.png"
//                   alt="Utilities"
//                   className="bg-yellow-300 bg-opacity-20 w-5 h-5 mr-2"
//                 />
//                 <div>
//                   <span className="font-semibold text-sm">Utilities</span>
//                   {post.postDetail.utilities === "owner" ? (
//                     <p className="text-xs text-gray-600">
//                       Owner is responsible
//                     </p>
//                   ) : (
//                     <p className="text-xs text-gray-600">
//                       Tenant is responsible
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {/* Pet Policy */}
//             <div className="flex flex-col mb-2">
//               <div className="flex items-center">
//                 <img
//                   src="/pet.png"
//                   alt="Pet Policy"
//                   className="bg-yellow-300 bg-opacity-20 w-5 h-5 mr-2"
//                 />
//                 <div>
//                   <span className="font-semibold text-sm">Pet Policy</span>
//                   {post.postDetail.pet === "allowed" ? (
//                     <p className="text-xs text-gray-600">Pets Allowed</p>
//                   ) : (
//                     <p className="text-xs text-gray-600">Pets not Allowed</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {/* Property Fees */}
//             <div className="flex flex-col mb-2">
//               <div className="flex items-center">
//                 <img
//                   src="/fee.png"
//                   alt="Property Fees"
//                   className="bg-yellow-300 bg-opacity-20 w-5 h-5 mr-2"
//                 />
//                 <div>
//                   <span className="font-semibold text-sm">Income Policy</span>
//                   <p className="text-xs text-gray-600">
//                     {post.postDetail.income}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Room Sizes */}
//           <p className="text-md font-semibold mb-4">Room Sizes</p>
//           <div className="flex flex-row justify-between space-x-2 mb-4">
//             {/* Size */}
//             <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
//               <img src="/size.png" alt="Size" className="w-4 h-4" />
//               <span className="font-semibold text-xs">
//                 {post.postDetail.size} sqft
//               </span>
//             </div>
//             {/* Beds */}
//             <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
//               <img src="/bed.png" alt="Beds" className="w-4 h-4" />
//               <span className="font-semibold text-xs">{post.bedroom} beds</span>
//             </div>
//             {/* Bathrooms */}
//             <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
//               <img src="/bath.png" alt="Bathroom" className="w-4 h-4" />
//               <span className="font-semibold text-xs">
//                 {post.bathroom} bathroom
//               </span>
//             </div>
//           </div>
//           {/* Nearby Places */}
//           <div>
//             <p className="text-md font-semibold mb-4">Nearby Places</p>
//             <div className="flex flex-row justify-between mb-4">
//               {/* School */}
//               <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
//                 <img
//                   src="/school.png"
//                   alt="School"
//                   className="bg-yellow-300 bg-opacity-20 w-5 h-4"
//                 />
//                 <div className="flex flex-col">
//                   <span className="font-semibold text-xs">School</span>
//                   <p className="text-xs text-gray-600">
//                     {post.postDetail.school > 999
//                       ? (post.postDetail.school / 1000).toFixed(1) + " km"
//                       : post.postDetail.school + " m"}{" "}
//                     away
//                   </p>
//                 </div>
//               </div>
//               {/* Bus Stop */}
//               <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
//                 <img
//                   src="/bus.png"
//                   alt="Bus Stop"
//                   className="bg-yellow-300 bg-opacity-20 w-5 h-4"
//                 />
//                 <div className="flex flex-col">
//                   <span className="font-semibold text-xs">Bus Stop</span>
//                   <p className="text-xs text-gray-600">
//                     {post.postDetail.bus} m away
//                   </p>
//                 </div>
//               </div>
//               {/* Restaurant */}
//               <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
//                 <img
//                   src="/restaurant.png"
//                   alt="Restaurant"
//                   className="bg-yellow-300 bg-opacity-20 w-5 h-4"
//                 />
//                 <div className="flex flex-col">
//                   <span className="font-semibold text-xs">Restaurant</span>
//                   <p className="text-xs text-gray-600">
//                     {post.postDetail.restaurant} m away
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Location Map */}
//           {showMap && (
//             <div>
//               <p className="text-md font-semibold mb-0">Location</p>
//               <TinyMap
//                 latitude={post.latitude}
//                 longitude={post.longitude}
//                 title={post.title}
//               />
//             </div>
//           )}
//           {/* Action Buttons */}
//           <div className="flex justify-between mt-2">
//             <button className="flex items-center bg-white p-2 rounded-lg shadow-sm px-3 py-2">
//               <img src="/chat.png" alt="Chat" className="w-4 h-4 mr-2" />
//               <span className="text-xs">Send a Message</span>
//             </button>
//             <button
//               onClick={handleSave}
//               className={`flex items-center p-2 rounded-lg shadow-sm px-3 py-2 ${
//                 saved ? "bg-yellow-400 text-white" : "bg-white text-black"
//               }`}
//             >
//               <img src="/save.png" alt="" className="w-4 h-4 mr-2" />
//               <span className={`text-xs ${saved ? "font-bold" : ""}`}>
//                 {saved ? "Post Saved" : "Save the Place"}
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SinglePage;





// SinglePage.js
// import React, { useState, useEffect, useContext } from "react";
// import Slider from "../components/Slider";
// import "leaflet/dist/leaflet.css";
// import TinyMap from "../components/TinyMap";
// import { useLoaderData, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { SocketContext } from "../context/SocketContext";
// import apiRequest from "../lib/apiRequest";
// import Chat from "../components/Chat";

// const SinglePage = () => {
//   const post = useLoaderData();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [saved, setSaved] = useState(post.isSaved);
//   const { currentUser } = useContext(AuthContext);
//   const { socket } = useContext(SocketContext);
//   const navigate = useNavigate();
//   const [showMap, setShowMap] = useState(true);
//   const [showChat, setShowChat] = useState(false);
//   const [currentChat, setCurrentChat] = useState(null);

//   const handleSave = async () => {
//     if (!currentUser) {
//       navigate("/login");
//       return;
//     }
//     setSaved((prev) => !prev);
//     try {
//       await apiRequest.post("/users/save", { postId: post.id });
//     } catch (err) {
//       console.log(err);
//       setSaved((prev) => !prev);
//     }
//   };

//   const handleContactSeller = async () => {
//     if (!currentUser) {
//       navigate("/login");
//       return;
//     }
//     try {
//       const response = await apiRequest.post("/chats", {
//         receiverId: post.user.id,
//       });
//       setCurrentChat(response.data);
//       setShowChat(true);
//     } catch (error) {
//       console.error("Error creating chat:", error);
//     }
//   };

//   useEffect(() => {
//     if (post) {
//       setLoading(false);
//     } else {
//       setError("Failed to load post data.");
//     }
//   }, [post]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="flex h-screen bg-white lg:flex lg:h-screen lg:bg-white">
//       <div className="lg:flex lg:w-full">
//         {/* Left Section */}
//         <div className="flex justify-center p-4 w-full lg:flex lg:justify-center lg:p-4 lg:w-[60%]">
//           <div className="flex w-full ml-4 lg:flex lg:w-full lg:ml-4">
//             <div className="flex flex-col w-full lg:flex lg:flex-col lg:w-full">
//               {/* Slider Component for Property Images */}
//               <Slider images={post.images} setShowMap={setShowMap} />
//               {/* Property Title, Address, Price, and Owner Info */}
//               <div className="flex justify-between items-center mb-4">
//                 <div className="flex flex-col">
//                   <h1 className="text-xl font-bold">{post.title}</h1>
//                   <div className="flex items-center mt-2">
//                     <img
//                       src="/pin.png"
//                       alt="Location pin"
//                       className="w-3 h-3 mr-2"
//                     />
//                     <span className="text-sm text-gray-600">
//                       {post.address}
//                     </span>
//                   </div>
//                   <div className="text-md font-semibold mt-3">
//                     <span className="bg-yellow-300 px-2 py-1 rounded-lg">
//                       ${post.price}
//                     </span>
//                   </div>
//                 </div>
//                 {/* Owner Information */}
//                 <div className="flex flex-col items-center px-5 py-3 bg-yellow-300 bg-opacity-20 rounded-lg">
//                   <img
//                     className="w-10 h-10 rounded-full object-cover bg-yellow-300 mb-2"
//                     src={post.user.avatar || "noAvatar.png"}
//                     alt={post.user.username}
//                   />
//                   <span className="text-sm text-center">
//                     {post.user.username}
//                   </span>
//                 </div>
//               </div>
//               {/* Property Description */}
//               <div className="text-sm text-gray-600 mt-4 break-words">
//                 <p
//                   dangerouslySetInnerHTML={{ __html: post.postDetail.desc }}
//                 ></p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Right Section */}
//         <div className="w-full lg:w-[40%] bg-[#fcf5f3] p-4">
//           {/* General Information */}
//           <p className="text-md font-semibold mb-2">General</p>
//           <div className="p-4 mb-4 rounded-lg bg-white shadow-sm">
//             {/* Utility Details */}
//             <div className="flex flex-col mb-2">
//               <div className="flex items-center">
//                 <img
//                   src="/utility.png"
//                   alt="Utilities"
//                   className="bg-yellow-300 bg-opacity-20 w-5 h-5 mr-2"
//                 />
//                 <div>
//                   <span className="font-semibold text-sm">Utilities</span>
//                   {post.postDetail.utilities === "owner" ? (
//                     <p className="text-xs text-gray-600">
//                       Owner is responsible
//                     </p>
//                   ) : (
//                     <p className="text-xs text-gray-600">
//                       Tenant is responsible
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {/* Pet Policy */}
//             <div className="flex flex-col mb-2">
//               <div className="flex items-center">
//                 <img
//                   src="/pet.png"
//                   alt="Pet Policy"
//                   className="bg-yellow-300 bg-opacity-20 w-5 h-5 mr-2"
//                 />
//                 <div>
//                   <span className="font-semibold text-sm">Pet Policy</span>
//                   {post.postDetail.pet === "allowed" ? (
//                     <p className="text-xs text-gray-600">Pets Allowed</p>
//                   ) : (
//                     <p className="text-xs text-gray-600">Pets not Allowed</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//             {/* Property Fees */}
//             <div className="flex flex-col mb-2">
//               <div className="flex items-center">
//                 <img
//                   src="/fee.png"
//                   alt="Property Fees"
//                   className="bg-yellow-300 bg-opacity-20 w-5 h-5 mr-2"
//                 />
//                 <div>
//                   <span className="font-semibold text-sm">Income Policy</span>
//                   <p className="text-xs text-gray-600">
//                     {post.postDetail.income}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Room Sizes */}
//           <p className="text-md font-semibold mb-4">Room Sizes</p>
//           <div className="flex flex-row justify-between space-x-2 mb-4">
//             {/* Size */}
//             <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
//               <img src="/size.png" alt="Size" className="w-4 h-4" />
//               <span className="font-semibold text-xs">
//                 {post.postDetail.size} sqft
//               </span>
//             </div>
//             {/* Beds */}
//             <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
//               <img src="/bed.png" alt="Beds" className="w-4 h-4" />
//               <span className="font-semibold text-xs">{post.bedroom} beds</span>
//             </div>
//             {/* Bathrooms */}
//             <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
//               <img src="/bath.png" alt="Bathroom" className="w-4 h-4" />
//               <span className="font-semibold text-xs">
//                 {post.bathroom} bathroom
//               </span>
//             </div>
//           </div>
//           {/* Nearby Places */}
//           <div>
//             <p className="text-md font-semibold mb-4">Nearby Places</p>
//             <div className="flex flex-row justify-between mb-4 gap-4 lg:flex lg:flex-row lg:justify-between lg:mb-4">
//               {/* School */}
//               <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
//                 <img
//                   src="/school.png"
//                   alt="School"
//                   className="bg-yellow-300 bg-opacity-20 w-5 h-4"
//                 />
//                 <div className="flex flex-col">
//                   <span className="font-semibold text-xs">School</span>
//                   <p className="text-xs text-gray-600">
//                     {post.postDetail.school > 999
//                       ? (post.postDetail.school / 1000).toFixed(1) + " km"
//                       : post.postDetail.school + " m"}{" "}
//                     away
//                   </p>
//                 </div>
//               </div>
//               {/* Bus Stop */}
//               <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
//                 <img
//                   src="/bus.png"
//                   alt="Bus Stop"
//                   className="bg-yellow-300 bg-opacity-20 w-5 h-4"
//                 />
//                 <div className="flex flex-col">
//                   <span className="font-semibold text-xs">Bus Stop</span>
//                   <p className="text-xs text-gray-600">
//                     {post.postDetail.bus} m away
//                   </p>
//                 </div>
//               </div>
//               {/* Restaurant */}
//               <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
//                 <img
//                   src="/restaurant.png"
//                   alt="Restaurant"
//                   className="bg-yellow-300 bg-opacity-20 w-5 h-4"
//                 />
//                 <div className="flex flex-col">
//                   <span className="font-semibold text-xs">Restaurant</span>
//                   <p className="text-xs text-gray-600">
//                     {post.postDetail.restaurant} m away
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Location Map */}
//           {showMap && (
//             <div>
//               <p className="text-md font-semibold mb-0">Location</p>
//               <TinyMap
//                 latitude={post.latitude}
//                 longitude={post.longitude}
//                 title={post.title}
//               />
//             </div>
//           )}
//           {/* Action Buttons */}
//           <div className="flex justify-between mt-2">
//             <button
//               onClick={handleContactSeller}
//               className="flex items-center bg-white p-2 rounded-lg shadow-sm px-3 py-2"
//             >
//               <img src="/chat.png" alt="Chat" className="w-4 h-4 mr-2" />
//               <span className="text-xs">Send a Message</span>
//             </button>
//             <button
//               onClick={handleSave}
//               className={`flex items-center p-2 rounded-lg shadow-sm px-3 py-2 ${
//                 saved ? "bg-yellow-400 text-white" : "bg-white text-black"
//               }`}
//             >
//               <img src="/save.png" alt="" className="w-4 h-4 mr-2" />
//               <span className={`text-xs ${saved ? "font-bold" : ""}`}>
//                 {saved ? "Post Saved" : "Save the Place"}
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//       {showChat && currentChat && (
//         <Chat
//           chat={currentChat}
//           onClose={() => setShowChat(false)}
//           socket={socket}
//         />
//       )}
//     </div>
//   );
// };

// export default SinglePage;




import React, { useState, useEffect, useContext } from "react";
import Slider from "../components/Slider";
import "leaflet/dist/leaflet.css";
import TinyMap from "../components/TinyMap";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { SocketContext } from "../context/SocketContext";
import apiRequest from "../lib/apiRequest";
import Chat from "../components/Chat";

const SinglePage = () => {
  const post = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(true);
  const [showChat, setShowChat] = useState(false);
  const [currentChat, setCurrentChat] = useState(null);

  // Handle saving the post
  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  // Handle starting a chat with the post creator
  const handleContactSeller = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    console.log(post.userId)
    try {
      const response = await apiRequest.post("/chats", {
        receiverId: post.userId,
      });
      setCurrentChat(response.data);
      setShowChat(true);
      navigate("/profilepage")
    } catch (error) {
      console.error("Error creating chat:", error);
    }
  };

  useEffect(() => {
    if (post) {
      setLoading(false);
    } else {
      setError("Failed to load post data.");
    }
  }, [post]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex h-screen bg-white lg:flex lg:h-screen lg:bg-white">
      <div className="lg:flex lg:w-full">
        {/* Left Section */}
        <div className="flex justify-center p-4 w-full lg:flex lg:justify-center lg:p-4 lg:w-[60%]">
          <div className="flex w-full ml-4 lg:flex lg:w-full lg:ml-4">
            <div className="flex flex-col w-full lg:flex lg:flex-col lg:w-full">
              {/* Slider Component for Property Images */}
              <Slider images={post.images} setShowMap={setShowMap} />
              {/* Property Title, Address, Price, and Owner Info */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold">{post.title}</h1>
                  <div className="flex items-center mt-2">
                    <img
                      src="/pin.png"
                      alt="Location pin"
                      className="w-3 h-3 mr-2"
                    />
                    <span className="text-sm text-gray-600">
                      {post.address}
                    </span>
                  </div>
                  <div className="text-md font-semibold mt-3">
                    <span className="bg-yellow-300 px-2 py-1 rounded-lg">
                      ${post.price}
                    </span>
                  </div>
                </div>
                {/* Owner Information */}
                <div className="flex flex-col items-center px-5 py-3 bg-yellow-300 bg-opacity-20 rounded-lg">
                  <img
                    className="w-10 h-10 rounded-full object-cover bg-yellow-300 mb-2"
                    src={post.user.avatar || "noAvatar.png"}
                    alt={post.user.username}
                  />
                  <span className="text-sm text-center">
                    {post.user.username}
                  </span>
                </div>
              </div>
              {/* Property Description */}
              <div className="text-sm text-gray-600 mt-4 break-words">
                <p
                  dangerouslySetInnerHTML={{ __html: post.postDetail.desc }}
                ></p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-[40%] bg-[#fcf5f3] p-4">
          {/* General Information */}
          <p className="text-md font-semibold mb-2">General</p>
          <div className="p-4 mb-4 rounded-lg bg-white shadow-sm">
            {/* Utility Details */}
            <div className="flex flex-col mb-2">
              <div className="flex items-center">
                <img
                  src="/utility.png"
                  alt="Utilities"
                  className="bg-yellow-300 bg-opacity-20 w-5 h-5 mr-2"
                />
                <div>
                  <span className="font-semibold text-sm">Utilities</span>
                  {post.postDetail.utilities === "owner" ? (
                    <p className="text-xs text-gray-600">
                      Owner is responsible
                    </p>
                  ) : (
                    <p className="text-xs text-gray-600">
                      Tenant is responsible
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* Pet Policy */}
            <div className="flex flex-col mb-2">
              <div className="flex items-center">
                <img
                  src="/pet.png"
                  alt="Pet Policy"
                  className="bg-yellow-300 bg-opacity-20 w-5 h-5 mr-2"
                />
                <div>
                  <span className="font-semibold text-sm">Pet Policy</span>
                  {post.postDetail.pet === "allowed" ? (
                    <p className="text-xs text-gray-600">Pets Allowed</p>
                  ) : (
                    <p className="text-xs text-gray-600">Pets not Allowed</p>
                  )}
                </div>
              </div>
            </div>
            {/* Property Fees */}
            <div className="flex flex-col mb-2">
              <div className="flex items-center">
                <img
                  src="/fee.png"
                  alt="Property Fees"
                  className="bg-yellow-300 bg-opacity-20 w-5 h-5 mr-2"
                />
                <div>
                  <span className="font-semibold text-sm">Income Policy</span>
                  <p className="text-xs text-gray-600">
                    {post.postDetail.income}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Room Sizes */}
          <p className="text-md font-semibold mb-4">Room Sizes</p>
          <div className="flex flex-row justify-between space-x-2 mb-4">
            {/* Size */}
            <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
              <img src="/size.png" alt="Size" className="w-4 h-4" />
              <span className="font-semibold text-xs">
                {post.postDetail.size} sqft
              </span>
            </div>
            {/* Beds */}
            <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
              <img src="/bed.png" alt="Beds" className="w-4 h-4" />
              <span className="font-semibold text-xs">{post.bedroom} beds</span>
            </div>
            {/* Bathrooms */}
            <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
              <img src="/bath.png" alt="Bathroom" className="w-4 h-4" />
              <span className="font-semibold text-xs">
                {post.bathroom} bathroom
              </span>
            </div>
          </div>
          {/* Nearby Places */}
          <div>
            <p className="text-md font-semibold mb-4">Nearby Places</p>
            <div className="flex flex-row justify-between mb-4 gap-4 lg:flex lg:flex-row lg:justify-between lg:mb-4">
              {/* School */}
              <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
                <img
                  src="/school.png"
                  alt="School"
                  className="bg-yellow-300 bg-opacity-20 w-5 h-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-xs">School</span>
                  <p className="text-xs text-gray-600">
                    {post.postDetail.school > 999
                      ? (post.postDetail.school / 1000).toFixed(1) + " km"
                      : post.postDetail.school + " m"}{" "}
                    away
                  </p>
                </div>
              </div>
              {/* Bus Stop */}
              <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
                <img
                  src="/bus.png"
                  alt="Bus Stop"
                  className="bg-yellow-300 bg-opacity-20 w-5 h-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-xs">Bus Stop</span>
                  <p className="text-xs text-gray-600">
                    {post.postDetail.bus} m away
                  </p>
                </div>
              </div>
              {/* Restaurant */}
              <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
                <img
                  src="/restaurant.png"
                  alt="Restaurant"
                  className="bg-yellow-300 bg-opacity-20 w-5 h-4"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-xs">Restaurant</span>
                  <p className="text-xs text-gray-600">
                    {post.postDetail.restaurant} m away
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Location Map */}
          {showMap && (
            <div>
              <p className="text-md font-semibold mb-0">Location</p>
              <TinyMap
                latitude={post.latitude}
                longitude={post.longitude}
                title={post.title}
              />
            </div>
          )}
          {/* Action Buttons */}
          <div className="flex justify-between mt-2">
            <button
              onClick={handleContactSeller}
              className="flex items-center bg-white p-2 rounded-lg shadow-sm px-3 py-2"
            >
              <img src="/chat.png" alt="Chat" className="w-4 h-4 mr-2" />
              <span className="text-xs">Send a Message</span>
            </button>
            <button
              onClick={handleSave}
              className={`flex items-center p-2 rounded-lg shadow-sm px-3 py-2 ${
                saved ? "bg-yellow-400 text-white" : "bg-white text-black"
              }`}
            >
              <img src="/save.png" alt="" className="w-4 h-4 mr-2" />
              <span className={`text-xs ${saved ? "font-bold" : ""}`}>
                {saved ? "Post Saved" : "Save the Place"}
              </span>
            </button>
          </div>
        </div>
      </div>
      {showChat && currentChat && (
        <Chat
          chat={currentChat}
          onClose={() => setShowChat(false)}
          socket={socket}
        />
      )}
    </div>
  );
};

export default SinglePage;
