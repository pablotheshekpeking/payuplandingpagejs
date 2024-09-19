"use client";
import React, { useEffect, useState } from "react";
import LoginForm from "@/app/_components/LoginForm";
import OtpForm from "./OtpForm";
import { useRouter } from "next/navigation";
import useUser from "../_hooks/useUser";
import { Box } from "@chakra-ui/react";

export default function Login() {
  const { user } = useUser();
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

  useEffect(() => {
    if (user) router.push("/user/dashboard");
  }, []);

  if (!user) return null;
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
