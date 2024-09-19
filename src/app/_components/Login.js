"use client";
import React, { useEffect, useState } from "react";
import LoginForm from "@/app/_components/LoginForm";
import OtpForm from "./OtpForm";
import { useRouter } from "next/navigation";
import { Box } from "@chakra-ui/react";
import { useAuth } from "../_contexts/AuthProvider";
import SpinnerFull from "./SpinnerFull";

export default function Login() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [{ email, password, otp }, setInput] = useState({
    email: null,
    password: null,
    otp: null,
  });

  function handleInput({ target: { name, value } }) {
    setInput((state) => ({ ...state, [name]: value }));
  }

  const { isAuthenticated, loading: isAuthenticating } = useAuth();

  useEffect(() => {
    if (isAuthenticated) router.push("/user/dashboard");
  }, [isAuthenticated]);

  if (isAuthenticating) return <SpinnerFull />;
  if (!isAuthenticated)
    return (
      <Box
        bg={"#F7EBE8"}
        minH={"100vh"}
        w={"100%"}
        pt={"3rem"}
        px={"4rem"}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
      >
        {step === 1 && (
          <LoginForm
            email={email}
            password={password}
            handleInput={handleInput}
            setStep={setStep}
          />
        )}

        {step === 2 && (
          <OtpForm
            setStep={setStep}
            otp={otp}
            email={email}
            setOtp={handleInput}
          />
        )}
      </Box>
    );
}
