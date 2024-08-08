import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/Homepage";
import ListPage from "./routes/ListPage";
import { Layout1, RequireAuth } from "./routes/Layout1";
import SinglePage from "./routes/SinglePage";
import ProfilePage from "./routes/ProfilePage";
import Register from "./routes/Register";
import Login from "./routes/Login";
import ProfileUpdatePage from "./routes/ProfileUpdatePage";
import NewPostPage from "./routes/NewPostPage";
import {
  listPageLoader,
  profilePageLoader,
  singlePageLoader,
} from "./lib/loaders";
import AboutPage from "./routes/About";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout1 />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profilepage",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profilepage/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
