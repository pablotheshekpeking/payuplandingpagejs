"use client";
import { useState, useEffect } from "react";

export default function useToken() {
  const [token, setToken] = useState(null);

  // Only access localStorage on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken ? JSON.parse(storedToken) : null);
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    if (typeof window !== "undefined") {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, [token]);

  return { token, setToken };
}
