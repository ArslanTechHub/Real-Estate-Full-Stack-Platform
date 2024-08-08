import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Layout1 = () => {
  return (
    <Layout>
      <Navbar />
      <Outlet />
    </Layout>
  );
};

export const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    if (!currentUser) return <Navigate to="/login" />;
  }
  return (
    currentUser && (
      <Layout>
        <Navbar />
        <Outlet />
      </Layout>
    )
  );
};

export default {Layout1, RequireAuth};
