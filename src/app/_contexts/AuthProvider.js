"use client";
import React, { useContext, useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { verifyToken } from "../_lib/data-service";

AuthProvider.propTypes = {
  children: PropTypes.any,
};
const AuthContext = createContext();

function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [isLogoutAction, setLogoutAction] = useState(false);

  // Load user from localStorage on initial mount
  useEffect(() => {
    console.log("fetch user");
    const storedUser = localStorage.getItem("user");

    console.log(storedUser);
    if (storedUser) {
      // when storedUser is not defined, setLoading is stuck at true

      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Check authenticated on mount and on router change
  useEffect(() => {
    if (!user) {
      setIsAuthenticating(false);
      return;
    }

    (async function authenticate() {
      console.log("auth function");
      setIsAuthenticating(true);
      try {
        await verifyToken(user?.token);
        setAuthenticated(true);
      } catch {
        setAuthenticated(false);
      } finally {
        setIsAuthenticating(false);
      }
    })();
  }, [router, user]);

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
    setAuthenticated(false);
    setLogoutAction(true);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        isAuthenticating,
        authenticated,
        isLogoutAction,
      }}
    >
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
