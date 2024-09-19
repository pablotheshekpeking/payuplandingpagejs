import React from "react";
import ProtectedRoute from "@/app/_components/ProtectedRoute";
import PropTypes from "prop-types";
import AuthProvider from "@/app/_contexts/AuthProvider";

DashboardLayout.propTypes = {
  children: PropTypes.any,
};

function DashboardLayout({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
export default DashboardLayout;
