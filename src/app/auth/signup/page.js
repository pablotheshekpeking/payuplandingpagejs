"use client";
import React, { useEffect, useState } from "react";
import OtpForm from "@/app/_components/OtpForm";
import SignupForm from "@/app/_components/SignupForm";
import { Box } from "@chakra-ui/react";
import ProgressBar from "@/app/_components/ProgressBar";
import AccountType from "@/app/_components/AccountType";
import { useAuth } from "@/app/_contexts/AuthProvider";
import { useRouter } from "next/navigation";
import SpinnerFull from "@/app/_components/SpinnerFull";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(null);
  const [email, setEmail] = useState(null);

  const router = useRouter();

  const { isAuthenticated, loading: isAuthenticating } = useAuth();

  useEffect(() => {
    if (isAuthenticated) return router.push("/user/dashboard");
  }, [isAuthenticated]);

  const steps = 3; // Total number of steps
  const currentStep = step;

  const handleInput = (e) => {
    setOtp(e.target.value);
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
  };

  if (isAuthenticating) return <SpinnerFull />;

  if (!isAuthenticated)
    return (
      <Box
        bg={"#F7EBE8"}
        minH={"100vh"}
        w={"100%"}
        pt={"3rem"}
        px={"4rem"}
        display={["flex", "flex", "block", "block"]}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ProgressBar
          steps={steps}
          currentStep={currentStep}
          handleBack={handleBack}
        />

        <Box
          w={"full"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          maxW={"60rem"}
          m={"0 auto"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            h={"auto"}
            justifyContent={"center"}
            position="relative"
            alignItems={"center"}
          >
            {step === 1 && <AccountType handleNextStep={handleNextStep} />}

            {step === 2 && <SignupForm setEmail={setEmail} setStep={setStep} />}

            {step === 3 && (
              <OtpForm
                otp={otp}
                email={email}
                setStep={setStep}
                setOtp={handleInput}
              />
            )}
          </Box>
        </Box>
      </Box>
    );
}
