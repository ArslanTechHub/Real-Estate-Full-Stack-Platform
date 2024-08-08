// import React, { Suspense, useContext } from "react";
// import List from "../components/List";
// import Chat from "../components/Chat";
// import apiRequest from "../lib/apiRequest";
// import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const ProfilePage = () => {
//   const data = useLoaderData();
//   const { updateUser, currentUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await apiRequest.post("/auth/logout");
//       updateUser(null);
//       navigate("/");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Default to empty arrays if data or postResponse is not available
//   const userPosts = data?.postResponse?.userPosts || [];
//   const savedPosts = data?.postResponse?.savedPosts || [];

//   return (
//     <div className="flex h-screen">
//       <div className="w-3/5 flex flex-col p-6 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-light">User Information</h1>
//           <Link to="/profilepage/update">
//             <button className="bg-yellow-400 text-black py-2 px-4 rounded text-sm">
//               Update Profile
//             </button>
//           </Link>
//         </div>
//         <div className="flex items-center space-x-6">
//           <div className="flex-shrink-0">
//             <img
//               className="w-20 h-20 rounded-full"
//               src={currentUser.avatar || "/noAvatar.png"}
//               alt="Avatar"
//             />
//           </div>
//           <div>
//             <p className="font-semibold">
//               Username:{" "}
//               <span className="font-normal">{currentUser.username}</span>
//             </p>
//             <p className="font-semibold">
//               E-mail: <span className="font-normal">{currentUser.email}</span>
//             </p>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white py-2 px-4 rounded text-sm mt-3"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-light">My List</h1>
//           <Link to="/add">
//             <button className="bg-yellow-400 text-black py-2 px-4 rounded text-sm">
//               Create New Post
//             </button>
//           </Link>
//         </div>
//         <Suspense fallback={<p>Loading...</p>}>
//           <Await
//             resolve={data?.postResponse} // Check if data is defined
//             errorElement={<p>Error loading posts!</p>}
//           >
//             {(postResponse) => <List posts={userPosts} />}
//           </Await>
//         </Suspense>
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-light">Saved List</h1>
//         </div>
//         <Suspense fallback={<p>Loading...</p>}>
//           <Await
//             resolve={data?.postResponse} // Check if data is defined
//             errorElement={<p>Error loading posts!</p>}
//           >
//             {(postResponse) => <List posts={savedPosts} />}
//           </Await>
//         </Suspense>
//       </div>
//       <div className="w-2/5 flex flex-col bg-[#fcf5f3]">
//         <Suspense fallback={<p>Loading...</p>}>
//           <Await
//             resolve={data?.chatResponse}
//             errorElement={<p>Error loading chats!</p>}
//           >
//             {(chatResponse) => <Chat chats={chatResponse} />}
//           </Await>
//         </Suspense>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;





// import React, { Suspense, useContext } from "react";
// import List from "../components/List";
// import Chat from "../components/Chat";
// import apiRequest from "../lib/apiRequest";
// import { Await, Link, useLoaderData, useNavigate, defer } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// const ProfilePage = () => {
//   const data = useLoaderData();
//   const { updateUser, currentUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await apiRequest.post("/auth/logout");
//       updateUser(null);
//       navigate("/");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Default to empty arrays if data or postResponse is not available
//   const userPosts = data?.postResponse?.userPosts || [];
//   const savedPosts = data?.postResponse?.savedPosts || [];

//   return (
//     <div className="flex h-screen">
//       <div className="w-full flex flex-row p-6 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track lg:w-3/5 lg:flex lg:flex-col lg:p-6 lg:space-y-6 lg:overflow-y-auto lg:scrollbar-thin scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track">
//         <div className="flex justify-between items-center lg:flex lg:justify-between lg:items-center">
//           <h1 className="text-3xl font-light">User Information</h1>
//           <Link to="/profilepage/update">
//             <button className="bg-yellow-400 text-black py-2 px-4 rounded text-sm">
//               Update Profile
//             </button>
//           </Link>
//         </div>
//         <div className="flex items-center space-x-6">
//           <div className="flex-shrink-0">
//             <img
//               className="w-20 h-20 rounded-full"
//               src={currentUser.avatar || "/noAvatar.png"}
//               alt="Avatar"
//             />
//           </div>
//           <div>
//             <p className="font-semibold">
//               Username:{" "}
//               <span className="font-normal">{currentUser.username}</span>
//             </p>
//             <p className="font-semibold">
//               E-mail: <span className="font-normal">{currentUser.email}</span>
//             </p>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white py-2 px-4 rounded text-sm mt-3"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-light">My List</h1>
//           <Link to="/add">
//             <button className="bg-yellow-400 text-black py-2 px-4 rounded text-sm">
//               Create New Post
//             </button>
//           </Link>
//         </div>
//         <Suspense fallback={<p>Loading...</p>}>
//           <Await
//             resolve={data?.postResponse}
//             errorElement={<p>Error loading posts!</p>}
//           >
//             {(postResponse) => <List posts={userPosts} />}
//           </Await>
//         </Suspense>
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-light">Saved List</h1>
//         </div>
//         <Suspense fallback={<p>Loading...</p>}>
//           <Await
//             resolve={data?.postResponse}
//             errorElement={<p>Error loading posts!</p>}
//           >
//             {(postResponse) => <List posts={savedPosts} />}
//           </Await>
//         </Suspense>
//       </div>
//       <div className="w-2 absolute bottom-0 bg-[#fcf5f3] lg:w-2/5 lg:flex lg:flex-col lg:relative lg:bg-[#fcf5f3]">
//         <Suspense fallback={<p>Loading...</p>}>
//           <Await
//             resolve={data?.chatResponse}
//             errorElement={<p>Error loading chats!</p>}
//           >
//             {(chatResponse) => <Chat chats={chatResponse} />}
//           </Await>
//         </Suspense>
//       </div>
//     </div>
//   );
// };


// export default ProfilePage;



import React, { Suspense, useContext } from "react";
import List from "../components/List";
import Chat from "../components/Chat";
import apiRequest from "../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate, defer } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProfilePage = () => {
  const data = useLoaderData();
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  // Default to empty arrays if data or postResponse is not available
  const userPosts = data?.postResponse?.userPosts || [];
  const savedPosts = data?.postResponse?.savedPosts || [];

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-scrollbar-thumb scrollbar-track-scrollbar-track lg:h-screen lg:w-3/5 lg:overflow-y-auto">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-light">User Information</h1>
            <Link to="/profilepage/update">
              <button className="bg-yellow-400 text-black py-2 px-4 rounded text-sm">
                Update Profile
              </button>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <img
                className="w-20 h-20 rounded-full"
                src={currentUser.avatar || "/noAvatar.png"}
                alt="Avatar"
              />
            </div>
            <div>
              <p className="font-semibold">
                Username:{" "}
                <span className="font-normal">{currentUser.username}</span>
              </p>
              <p className="font-semibold">
                E-mail: <span className="font-normal">{currentUser.email}</span>
              </p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded text-sm mt-3"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-light">My List</h1>
            <Link to="/add">
              <button className="bg-yellow-400 text-black py-2 px-4 rounded text-sm">
                Create New Post
              </button>
            </Link>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data?.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={userPosts} />}
            </Await>
          </Suspense>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-light">Saved List</h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data?.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <List posts={savedPosts} />}
            </Await>
          </Suspense>
        </div>
      </div>





      
      <div className="h-[40vh] bg-[#fcf5f3] lg:h-screen lg:w-2/5">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={data?.chatResponse}
            errorElement={<p>Error loading chats!</p>}
          >
            {(chatResponse) => <Chat chats={chatResponse} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ProfilePage;