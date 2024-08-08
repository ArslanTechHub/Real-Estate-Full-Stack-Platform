// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import apiRequest from "../lib/apiRequest";
// import { AuthContext } from "../context/AuthContext";

// function Login() {
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const { updateUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");
//     const formData = new FormData(e.target);
//     const username = formData.get("username");
//     const password = formData.get("password");

//     try {
//       const res = await apiRequest.post("/auth/login", { username, password });
//       updateUser(res.data);
//       navigate("/");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex">
//       <div className="w-3/5 flex items-center justify-center">
//         <form
//           className="flex flex-col gap-6 max-w-md w-full px-8"
//           onSubmit={handleSubmit}
//         >
//           <h1 className="text-3xl font-bold mb-4">Welcome back</h1>
//           <input
//             name="username"
//             required
//             minLength={3}
//             maxLength={20}
//             type="text"
//             placeholder="Username"
//             className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
//           />
//           <input
//             name="password"
//             type="password"
//             required
//             placeholder="Password"
//             className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
//           />
//           <button
//             className="p-4 rounded bg-teal-500 text-white font-bold cursor-pointer hover:bg-teal-600 disabled:bg-teal-100 disabled:cursor-not-allowed"
//             disabled={isLoading}
//           >
//             Login
//           </button>
//           {error && <span className="text-red-600">{error}</span>}
//           <Link
//             to="/register"
//             className="text-gray-500 text-sm border-b border-gray-400 w-max mt-4"
//           >
//             Don't you have an account?
//           </Link>
//         </form>
//       </div>
//       <div className="w-2/5 bg-[#fcf5f3] flex items-center justify-center relative">
//         <img src="/bg.png" alt="" className="w-full object-cover" />
//       </div>
//     </div>
//   );
// }

// export default Login;



import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../lib/apiRequest";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", { username, password });
      updateUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/5 flex items-center justify-center p-4 lg:p-0">
        <form
          className="flex flex-col gap-6 max-w-md w-full px-4 lg:px-8"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold mb-4">Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
            className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="p-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            className="p-4 rounded bg-teal-500 text-white font-bold cursor-pointer hover:bg-teal-600 disabled:bg-teal-100 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            Login
          </button>
          {error && <span className="text-red-600">{error}</span>}
          <Link
            to="/register"
            className="text-gray-500 text-sm border-b border-gray-400 w-max mt-4"
          >
            Don't you have an account?
          </Link>
        </form>
      </div>
      <div className="hidden lg:block lg:w-2/5 bg-[#fcf5f3] items-center justify-center relative">
        <img src="/bg.png" alt="" className="w-full object-cover" />
      </div>
    </div>
  );
}

export default Login;