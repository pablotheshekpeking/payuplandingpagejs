"use client";
import React from "react";
import PropTypes from "prop-types";
import SpinnerFull from "./SpinnerFull";
import { useAuth } from "../_contexts/AuthProvider";

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading: isAuthenticating } = useAuth();

  console.log("here in protected", isAuthenticated);

  if (isAuthenticating) return <SpinnerFull />;

  if (isAuthenticated) return children;

  return null;
}

export default ProtectedRoute;
