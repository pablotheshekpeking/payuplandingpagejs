"use client";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SpinnerFull from "./SpinnerFull";
import { useAuth } from "../_contexts/AuthProvider";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};

function ProtectedRoute({ children }) {
  const router = useRouter();
  const { isAuthenticating, authenticated, isLogoutAction } = useAuth();

  //when i refresh dashboard page this runs takes me to login
  useEffect(() => {
    // isAuthenticating should not be false when it hasnt finished authenticating
    console.log(isAuthenticating, authenticated);
    if (!isAuthenticating && !authenticated) {
      if (!isLogoutAction) {
        toast.error("Login to access your dashboard");
      }
      // If not authenticated after loading, redirect to login
      router.push("/login");
    }
  }, [router, isAuthenticating, authenticated]);

  // Show a loading spinner while authentication is still in progress
  if (isAuthenticating) return <SpinnerFull />;

  // If authenticated, render the protected content
  if (authenticated) return children;

  return null;
}

export default ProtectedRoute;
