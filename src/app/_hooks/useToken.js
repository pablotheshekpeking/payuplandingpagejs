import { useState, useEffect } from "react";
export default function useToken() {
  const [token, setToken] = useState(function () {
    return JSON.parse(localStorage.getItem("token"));
  });

  useEffect(() => {
    if (!token) return;
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);

  return { token, setToken };
}
