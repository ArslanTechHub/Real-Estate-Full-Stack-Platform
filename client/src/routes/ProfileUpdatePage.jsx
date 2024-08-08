// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { useContext, useState } from "react";
// import apiRequest from "../lib/apiRequest";
// import UploadWidget from "../components/UploadWidget";

// function ProfileUpdatePage() {
//   const { currentUser, updateUser } = useContext(AuthContext);
//   const [error, setError] = useState("");
//   const [avatar, setAvatar] = useState(currentUser.avatar ? [currentUser.avatar] : []);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     const formData = new FormData(e.target);
//     const { username, email, password } = Object.fromEntries(formData);

//     try {
//       const res = await apiRequest.put(`/users/${currentUser.id}`, {
//         username,
//         email,
//         password,
//         avatar: avatar[0], // Ensure the URL is correct
//       });
//       updateUser(res.data);
//       navigate("/profilepage");
//     } catch (err) {
//       console.log(err);
//       setError(err.response?.data?.message || "An error occurred");
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       <div className="w-3/5 flex items-center justify-center">
//         <form
//           className="flex flex-col gap-6 max-w-md w-full px-8"
//           onSubmit={handleSubmit}
//         >
//           <h1 className="text-3xl font-bold mb-4">Update Profile</h1>
//           <input
//             id="username"
//             name="username"
//             type="text"
//             defaultValue={currentUser.username}
//             placeholder="Username"
//             className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
//           />
//           <input
//             id="email"
//             name="email"
//             type="email"
//             defaultValue={currentUser.email}
//             placeholder="Email"
//             className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
//           />
//           <input
//             id="password"
//             name="password"
//             type="password"
//             placeholder="Password"
//             className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
//           />
//           <button className="p-4 rounded bg-teal-500 text-white font-bold cursor-pointer hover:bg-teal-600 disabled:bg-teal-100 disabled:cursor-not-allowed">
//             Update
//           </button>
//           {error && <span className="text-red-600">{error}</span>}
//         </form>
//       </div>
//       <div className="w-2/5 bg-[#fcf5f3] flex flex-col items-center justify-center relative">
//         <img
//           src={avatar[0] || "/noAvatar.png"}
//           alt="Avatar"
//           className="w-1/2 object-cover rounded-md mb-4"
//         />
//         <UploadWidget
//           uwConfig={{
//             cloudName: "dgdkmfby6",
//             uploadPreset: "RealEstate",
//             multiple: false,  // Single image upload for profile
//             maxImageFileSize: 3000000,
//             folder: "avatars",
//           }}
//           setState={setAvatar}
//         />
//       </div>
//     </div>
//   );
// }

// export default ProfileUpdatePage;


import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";
import UploadWidget from "../components/UploadWidget";

function ProfileUpdatePage() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState(currentUser.avatar ? [currentUser.avatar] : []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      updateUser(res.data);
      navigate("/profilepage");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/5 flex items-center justify-center p-4 lg:p-0">
        <form
          className="flex flex-col gap-6 max-w-md w-full px-4 lg:px-8"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Update Profile</h1>
          <input
            id="username"
            name="username"
            type="text"
            defaultValue={currentUser.username}
            placeholder="Username"
            className="p-3 lg:p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={currentUser.email}
            placeholder="Email"
            className="p-3 lg:p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="p-3 lg:p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button className="p-3 lg:p-4 rounded bg-teal-500 text-white font-bold cursor-pointer hover:bg-teal-600 disabled:bg-teal-100 disabled:cursor-not-allowed">
            Update
          </button>
          {error && <span className="text-red-600">{error}</span>}
        </form>
      </div>
      <div className="w-full lg:w-2/5 bg-[#fcf5f3] flex flex-col items-center justify-center p-8 lg:p-0 lg:relative">
        <img
          src={avatar[0] || "/noAvatar.png"}
          alt="Avatar"
          className="w-1/2 max-w-xs object-cover rounded-md mb-4"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "dgdkmfby6",
            uploadPreset: "RealEstate",
            multiple: false,
            maxImageFileSize: 3000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;