'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { Box, Button, Checkbox, Spinner, Text, useToast } from '@chakra-ui/react';
import CustomInput from "@/app/components/custominput";
import CustomPinInput from "@/app/components/pininput";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Login, Step 2: OTP
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(''); // State for OTP
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (step === 1) {
      // Handle Login
      try {
        const response = await fetch('https://pay-up-api-fjwf.vercel.app/api/v1/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          setStep(2); // Move to OTP step
          toast({
            title: "Login successful.",
            description: "Please enter the OTP sent to your email.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else {
          throw new Error(data.message || 'Login failed');
        }
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    } else if (step === 2) {
      // Handle OTP Verification
      try {
        const response = await fetch('https://pay-up-api-fjwf.vercel.app/api/v1/users/verify-otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, otp }),
        });

        const data = await response.json();

        if (response.ok) {
          // Start a session with user details and redirect to dashboard
          localStorage.setItem('user', JSON.stringify(data.user));
          router.push('/dashboard');
        } else {
          throw new Error(data.message || 'OTP verification failed');
        }
      } catch (error) {
        toast({
          title: "An error occurred.",
          description: error.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    }
  };

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
        <form onSubmit={handleSubmit} style={{ width: '576px', maxWidth: '100%' }}>
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
            <Text fontWeight={600} fontSize={'24px'} pb={'16px'}>
              {step === 1 ? 'Login' : 'Enter OTP'}
            </Text>

            {step === 1 ? (
              <>
                <CustomInput
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <CustomInput
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Checkbox
                  isChecked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  mb={'16px'}
                >
                  I agree to the Terms and Conditions
                </Checkbox>
              </>
            ) : (
              <CustomPinInput
                type="text"
                name="otp"
                id="otp"
                value={otp}
                onChange={(value) => setOtp(value)}
              />
            )}

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
        <Box w={'100%'} pt={'60px'}>
          <Text textAlign={'right'}>© 2024 Payup. All rights reserved.</Text>
        </Box>
      </Box>
    </Box>
  );
}
