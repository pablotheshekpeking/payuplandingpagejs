import { useState, useEffect } from "react";
export default function useUser() {
  const [user, setUser] = useState(function () {
    return JSON.parse(localStorage.getItem("user"));
  });

  function logout() {
    localStorage.removeItem("user");
  }

  useEffect(() => {
    if (!user) return;
    console.log("User set successfully");
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return { user, setUser, logout };
}
