"use client";
import { useState, useEffect } from "react";

export default function useUser() {
  const [user, setUser] = useState(null);

  // Only access localStorage on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }
  }, []);

  function logout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
    setUser(null);
  }

  useEffect(() => {
    if (!user) return;
    console.log("User set successfully");
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return { user, setUser, logout };
}
