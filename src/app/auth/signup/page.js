'use client'
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Text, Image, Center } from "@chakra-ui/react";
import {
  Box,
  Button,
  FormControl,
  GridItem,
  Input,
  Select,
  Checkbox,
  useToast,
  Spinner,
  Progress
} from '@chakra-ui/react';
import { ArrowBackIcon, WarningTwoIcon } from "@chakra-ui/icons";
import CustomInput from "@/app/components/custominput";
import CustomPinInput from "@/app/components/pininput";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const [signupData, setSignupData] = useState(null); // Store signup data
  const [otp, setOtp] = useState('');
  const toast = useToast();

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const steps = 3; // Total number of steps
  const currentStep = step; // This should be the current step from your state

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
  };

  const validateInputs = () => {
    if (!firstName || !lastName || !email || !password || !passwordConfirm) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return false;
    }

    if (password !== passwordConfirm) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a signup process
    setTimeout(() => {
      setLoading(false);
      // Handle successful signup or error here
    }, 2000);

    if (!validateInputs()) return;

    if (!agreeToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the Terms and Conditions.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch('https://pay-up-api-fjwf.vercel.app/api/v1/users/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, password, passwordConfirm }),
      });

      const data = await response.json();
      if (response.ok) {
        setSignupData({ email }); // Store the email for later use
        setStep(3); // Move to OTP step
      } else {
        throw new Error(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error); // Log error to console
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    if (!signupData || !signupData.email) {
      toast({
        title: "Error",
        description: "Signup data is missing.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const otpResponse = await fetch('https://pay-up-api-fjwf.vercel.app/api/v1/users/verify-otp', {
        method: 'POST',
        body: JSON.stringify({ email: signupData.email, otp }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (otpResponse.ok) {
        // Redirect to dashboard or complete the signup
        window.location.href = '/dashboard';
      } else {
        const otpError = await otpResponse.json();
        throw new Error(otpError.message || 'OTP verification failed');
      }
    } catch (error) {
      console.error('OTP error:', error);
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      w={'full'}
      h={'100vh'}
      bg={'#F7EBE8'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      py={'40px'}
      maxW={'1728px'}
      m={'0 auto'}
    >
      <Box
        w={'full'}
        display={'flex'}
        flexDirection={'column'}
        h={'auto'}
        justifyContent={'center'}
        px={['24px', '24px', '24px', '128px']}
        position="relative"
        alignItems={'center'}
      >
        {step > 0 && (
          <Box
            w={'100%'}
            display={['none', 'none', 'flex', 'flex']}
            justifyContent={'space-between'}
            pt={'8px'}
            pb={'40px'}
            alignItems={'center'}
            h={'84px'}
          >
            <Box display={'flex'} gap={'24px'} w={'50%'} alignItems={'center'}>
              <ArrowBackIcon
                boxSize={14}
                border={"2px solid black"}
                borderRadius={'12px'}
                p={'10px'}
                onClick={handleBack}
                cursor={'pointer'}
              />
              <Box w={'100%'} display={'flex'} flexDirection={'column'} gap={'8px'}>
                <Text fontWeight={500} fontSize={'32px'}>{currentStep}/{steps}</Text>
                <Progress
                  value={(currentStep / steps) * 100}
                  colorScheme='green'
                  size='sm'
                  w={'300px'}
                />
              </Box>
            </Box>
            <Box display={'flex'} justifyContent={'right'} h={'80px'}>
              <Box w={'400px'} px={'16px'} py={'12px'} bg={'black'} display={'flex'} alignItems={'center'} borderRadius={'20px'}>
                <Text color={'white'} textAlign={'center'} w={'50%'}>Have an account?</Text>
                <Link href={'./login'} style={{ padding: 20, width: '50%', height: '80px' }}>
                  <Box bg={'white'} h={'full'} w={'full'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'14px'} cursor={'pointer'}>
                    <Text textAlign={'center'} fontWeight={700}>Log in</Text>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
        )}

        {step === 1 && (
          <Box w={['100%', '100%', '50%', '50%']} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Text fontWeight={600} fontSize={'24px'} pb={'16px'}>How will you use Pay Up?</Text>
            <Text fontSize={'18px'}>Please select an option below</Text>
            <Box
              display={'flex'}
              w={'400px'}
              maxW={'100%'}
              border={'1px solid #11131761'}
              borderRadius={'8px'}
              mt={'32px'}
            >
              <Box w={'50%'} bg={'black'} h={'40px'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'}>
                <Text color={'white'} textAlign={'center'}>Personal</Text>
              </Box>
              <Box w={'50%'} bg={'white'} h={'40px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Text>Merchant</Text>
              </Box>
            </Box>

            <Box
              w={'100%'}
              h={'200px'}
              bg={'#FFF239'}
              mt={'32px'}
              display={'flex'}
              borderRadius={'20px'}
              border={'1px solid black'}
            >
              <Box w={'60%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'16px'}>
                <Text fontWeight={500} fontSize={['14px', '14px', '14px', '20px']}>Sign up for personal use to</Text>
                <Box display={'flex'} gap={'8px'} alignItems={'center'}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#399500" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5227 5.97725C13.7424 6.19692 13.7424 6.55308 13.5227 6.77275L8.27275 12.0227C8.05308 12.2424 7.69692 12.2424 7.47725 12.0227L4.47725 9.02275C4.25758 8.80308 4.25758 8.44692 4.47725 8.22725C4.69692 8.00758 5.05308 8.00758 5.27275 8.22725L7.875 10.8295L12.7273 5.97725C12.9469 5.75758 13.3031 5.75758 13.5227 5.97725Z" fill="white" />
                  </svg>
                  <Text fontSize={['10px', '10px', '10px', '12px']} textAlign={'left'}>Foot all international bills on the go</Text>
                </Box>
                <Box display={'flex'} gap={'8px'} alignItems={'center'}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#399500" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5227 5.97725C13.7424 6.19692 13.7424 6.55308 13.5227 6.77275L8.27275 12.0227C8.05308 12.2424 7.69692 12.2424 7.47725 12.0227L4.47725 9.02275C4.25758 8.80308 4.25758 8.44692 4.47725 8.22725C4.69692 8.00758 5.05308 8.00758 5.27275 8.22725L7.875 10.8295L12.7273 5.97725C12.9469 5.75758 13.3031 5.75758 13.5227 5.97725Z" fill="white" />
                  </svg>
                  <Text fontSize={['10px', '10px', '10px', '12px']} textAlign={'left'}>Receive meal ideas and inspirations</Text>
                </Box>
              </Box>
              <Box
                w={'40%'}
                display={'flex'}
                justifyContent={'center'}
                flexDirection={'column'}
                alignItems={'center'}
                borderTopRightRadius={'20px'}
                borderBottomRightRadius={'20px'}
              >
                <Image
                  w={'full'} h={'full'}
                  src={'/spiral.png'}
                  alt={'Personal Use'}
                />
              </Box>
            </Box>

            <Box bg={'black'} maxW={'100%'} borderRadius={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'18px'} mt={'32px'} cursor={'pointer'} onClick={handleNextStep}>
              <Text color={'#F7F564'}>Get started</Text>
            </Box>
          </Box>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} style={{ width: '500px', maxWidth: '100%' }}>
            <Box
              w={'100%'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              p={'20px'}
              h={'auto'}
              borderRadius={'30px'} gap={'4px'} bg={'#FFF239'} border={'2px solid #111317'} alignItems={'center'} borderRight={'8px solid #111317'} borderBottom={'8px solid #111317'}
            >
              <svg width="48" height="42" viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7226 34.0434C10.1013 35.6123 7.49981 36.5924 5.35335 37.2003L5.44153 36.9731L19.1654 27.9646C19.108 28.0433 19.0407 28.1339 18.9641 28.2352C18.6479 28.653 18.1761 29.2456 17.5728 29.918C16.348 31.2828 14.6663 32.8801 12.7226 34.0434ZM27.8542 22.2613L30.2985 24.0932L21.8371 26.2109L27.8542 22.2613ZM17.4498 14.529L19.6697 16.2115L11.6089 21.4115L15.0514 12.7112L17.4498 14.529Z" fill="black" stroke="black" stroke-width="6" />
              </svg>


              <Text fontWeight={600} fontSize={'24px'} pb={'16px'}>Create an Account</Text>

              <CustomInput
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <CustomInput
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <CustomInput
                placeholder="Email"
                type="email"
                value={email}
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <CustomInput
                placeholder="passowrd"
                type="password"
                name="Password"
                id="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <CustomInput
                placeholder="Confirm Password"
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />

              <Box w={'full'} textAlign={'left'} pt={'8px'}>
              <Checkbox
                isChecked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                w={'full'}
                textAlign={'left'}
                border={'black'}
              >
                <Text letterSpacing={'0.4px'}>I agree to Pay Up’s <span style={{ fontWeight: 700, textDecoration: 'underline'}}>Terms and Conditions.</span></Text>
              </Checkbox>
              <Button w={'100%'} h={'58px'} mt="8px" bg="black" type="submit" name="submit" color={'#FFF239'} borderRadius={'20px'}>{loading ? <Spinner size="md" color="#FFF239" /> : 'Continue'}</Button>
              </Box>

              
            </Box>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleOtpSubmit} style={{ width: '576px', maxWidth: '100%' }}>
            <Box
            w={'100%'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            p={'20px'}
            h={'auto'}
            borderRadius={'30px'}
            gap={'12px'}
            bg={'#FFF239'}
            border={'2px solid #111317'}
            alignItems={'center'} borderRight={'8px solid #111317'} borderBottom={'8px solid #111317'}
          >
            <Text>Enter OTP sent to {signupData.email}:</Text>
            <CustomPinInput
                type="text"
                name="otp"
                id="otp"
                value={otp}
                onChange={(value) => setOtp(value)}
              />
            <Button
              w={'100%'}
              h={'58px'}
              mt="24px"
              bg="black"
              type="submit"
              name="submit"
              color={'#FFF239'}
              borderRadius={'20px'}
            >
              {loading ? <Spinner size="md" color="#FFF239" /> : 'Continue'}
            </Button>
            </Box>
          </form>
        )}
        <Box w={'100%'} pt={'40px'}>
          <Text textAlign={'right'}>© 2024 Payup. All rights reserved.</Text>
        </Box>
      </Box>
    </Box>
  );
}
