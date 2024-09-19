"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SpinnerFull from "./SpinnerFull";
import { useAuth } from "../_contexts/AuthProvider";
import { verifyToken } from "../_lib/data-service";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};

function ProtectedRoute({ children }) {
  const router = useRouter();
  const { user, loading: isUserLoading } = useAuth();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isAuthenticating, setAuthenticating] = useState(true);

  useEffect(() => {
    console.log(isUserLoading);
    if (isUserLoading) return;

    // If no user token, redirect to login
    if (!user?.token) {
      toast.error("Please login!");
      setAuthenticating(false);
      return router.push("/auth/login");
    }

    // Validate token via backend
    (async function authenticate() {
      try {
        await verifyToken(user?.token);
        setAuthenticated(true);
      } catch (err) {
        console.log("really");
        toast.error(err.message);
        router.push("/auth/login");
      } finally {
        setAuthenticating(false);
      }
    })();
  }, [user]);

  if (isAuthenticating) return <SpinnerFull />;

  if (isAuthenticated) return children;

  return null;
}

export default ProtectedRoute;
