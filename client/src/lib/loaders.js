import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";


// export const singlePageLoader = async ({ request, params }) => {
//   console.log("Fetching post with ID:", params.id); // Log the ID
//   const res = await apiRequest("/posts/" + params.id);
//   return res.data;
// };

// export const singlePageLoader = async ({ request, params }) => {
//   console.log("Fetching post with ID:", params.id); // Log the ID
//   try {
//     const res = await apiRequest(`/posts/${params.id}`);
//     console.log("Fetched post data:", res.data); // Log the fetched data
//     return res.data;
//   } catch (err) {
//     console.error("Error fetching post data:", err);
//     throw err;
//   }
// }

export const singlePageLoader = async ({ request, params }) => {
  console.log("Fetching post with ID:", params.id); // Log the ID
  try {
    const res = await apiRequest(`/posts/${params.id}`);
    console.log("Fetched post data:", res.data); // Log the fetched data
    return res.data;
  } catch (err) {
    console.error("Error fetching post data:", err);
    throw err;
  }
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequest("/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};



// export const profilePageLoader = async () => {
//   try {
//     const [postResponse, chatResponse] = await Promise.all([
//       apiRequest.get("/users/profilePosts"),
//       apiRequest.get("/chats"),
//     ]);

//     console.log("Profile data:", postResponse.data); // Added logging for verification
//     console.log("Chat data:", chatResponse.data); // Added logging for verification

//     return defer({
//       postResponse: postResponse.data,
//       chatResponse: chatResponse.data,
//     });
//   } catch (error) {
//     console.error("Error fetching profile data:", error);
//     return defer({
//       postResponse: {}, // Provide a default empty object or handle the error
//       chatResponse: {}, // Also provide a default empty object here
//     });
//   }
// };


export const profilePageLoader = async () => {
  try {
    const [postResponse, chatResponse] = await Promise.all([
      apiRequest.get("/users/profilePosts"),
      apiRequest.get("/chats"),
    ]);

    console.log("Profile data:", postResponse.data);
    console.log("Chat data:", chatResponse.data);

    return defer({
      postResponse: postResponse.data,
      chatResponse: chatResponse.data,
    });
  } catch (error) {
    console.error("Error fetching profile data:", error);
    return defer({
      postResponse: {},
      chatResponse: {},
    });
  }
};