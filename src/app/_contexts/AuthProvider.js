"use client";
import React, { useContext, useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

AuthProvider.propTypes = {
  children: PropTypes.any,
};
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on initial mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log("here1");
    if (storedUser) {
      // The fact that the code is not entering here it causes setLoading not to be false
      console.log("here2");
      setUser(JSON.parse(storedUser));
    }
    console.log("here3");
    setLoading(false); // Stop loading once user data is retrieved or determined to be null
  }, []);

  // Set User (only when user is not null)
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  // Logout function
  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("You cannot use Authentication outside its provider");
  }
  return context;
}

export default AuthProvider;
