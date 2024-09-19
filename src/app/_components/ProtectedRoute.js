"use client";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { verifyToken } from "../_lib/data-service";
import useToken from "../_hooks/useToken";
import { Spinner, Box } from "@chakra-ui/react";
import SpinnerFull from "./SpinnerFull";
import toast from "react-hot-toast";

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};

function ProtectedRoute({ children }) {
  const router = useRouter();
  const { token } = useToken();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    (async function authenticate() {
      try {
        await verifyToken(token);
        setAuthenticated(true);
      } catch (err) {
        console.log(err);
        toast.error("Please login in.");
        router.push("/auth/login");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return loading ? <SpinnerFull /> : authenticated ? children : null;
}

export default ProtectedRoute;
