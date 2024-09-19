"use client";
import { useEffect } from "react";
import useUser from "../_hooks/useUser";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};

function ProtectedRoute({ children }) {
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/auth/login");
  }, []);
  const { user } = useUser();
  console.log(user);
  return user ? children : null;
}

export default ProtectedRoute;
