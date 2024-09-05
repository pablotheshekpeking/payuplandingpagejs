'use client'
import React, { useState } from "react";
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
  Spinner
} from '@chakra-ui/react';
import { ArrowBackIcon, WarningTwoIcon } from "@chakra-ui/icons";
import CustomInput from "@/app/components/custominput";

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
  const toast = useToast();

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

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
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setIsSignupComplete(true);
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

  if (isSignupComplete) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <Text fontSize="xl" mb={4}>
          Signup successful! You can now log in.
        </Text>
        <Link href="./login" passHref>
          <Button colorScheme="blue">Go to Login</Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box
      w={'full'}
      h={'auto'}
      bg={'#F7EBE8'}
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      py={'40px'}
    >
      <Box
        w={'full'}
        display={'flex'}
        flexDirection={'column'}
        h={'100vh'}
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
            pt={'20px'}
            pb={'80px'}
            alignItems={'center'}
          >
            <ArrowBackIcon boxSize={[10, 10, 10, 10]} onClick={handleBack} cursor={'pointer'} />
            <Box display={'flex'} justifyContent={'right'} h={'50px'}>
              <Box w={'400px'} px={'24px'} py={'12px'} bg={'#16160E6B'} display={'flex'} alignItems={'center'} borderRadius={'20px'}>
                <Text color={'white'} w={'45%'}>Have an account?</Text>
                <Link href={'./login'} style={{ padding: 20, width: '45%' }}>
                  <Box bg={'white'} w={'full'} borderRadius={'14px'} cursor={'pointer'}>
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
          <form onSubmit={handleSubmit} style={{ width: '576px', maxWidth: '100%' }}>
            <Box
              w={'100%'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              p={'20px'}
              h={'auto'}
              borderRadius={'30px'} gap={'12px'} bg={'#FFF239'} border={'2px solid #111317'} alignItems={'center'}
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

              <Checkbox
                isChecked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                mb={'16px'}
              >
                I agree to the Terms and Conditions
              </Checkbox>

              <Button w={'100%'} h={'58px'} mt="24px" bg="black" type="submit" name="submit" color={'#FFF239'} borderRadius={'20px'}>{loading ? <Spinner size="md" color="#FFF239" /> : 'Continue'}</Button>
            </Box>
          </form>
        )}
      </Box>
    </Box>
  );
}
