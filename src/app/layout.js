import { Roboto } from "next/font/google";
import { Providers } from "./providers";
import React from "react";
import "@/app/_styles/globals.css";
import { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

RootLayout.propTypes = {
  children: PropTypes.any,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>{children}</Providers>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
              style: {
                background: "#4caf50", // green background
                color: "#fff", // white text
              },
              iconTheme: {
                primary: "#fff", // icon color
                secondary: "#4caf50", // icon background
              },
            },
            error: {
              duration: 5000,
              style: {
                background: "#f44336", // red background
                color: "#fff", // white text
              },
            },
            iconTheme: {
              primary: "#fff", // icon color
              secondary: "#f44336", // icon background
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </body>
    </html>
  );
}
