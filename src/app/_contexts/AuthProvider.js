"use client";
import React, { useContext } from "react";
import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { verifyToken } from "../_lib/data-service";
import toast from "react-hot-toast";

AuthProvider.propTypes = {
  children: PropTypes.any,
};
const AuthContext = createContext();

function AuthProvider({ children }) {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const token = user?.token;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }
  }, []);

  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  }

  useEffect(() => {
    if (!token) {
      toast.error("Please login!");
      console.log("No token pushed back to login");
      return;
      //   return router.push("/auth/login");
    }
    (async function authenticate() {
      try {
        console.log(await verifyToken(token));
        setAuthenticated(true);
      } catch (err) {
        console.log(err);
        toast.error(err.message);
        router.push("/auth/login");
      } finally {
        setLoading(false);
      }
    })();
  }, [token, router]);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, logout, isAuthenticated, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("You cannot use Authentication outside its provider");

  return context;
}
export default AuthProvider;
