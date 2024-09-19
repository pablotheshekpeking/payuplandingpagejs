"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./_contexts/AuthProvider";
import PropTypes from "prop-types";

Providers.propTypes = {
  children: PropTypes.any,
};
export function Providers({ children }) {
  return (
    <ChakraProvider>
      <AuthProvider>{children}</AuthProvider>
    </ChakraProvider>
  );
}
