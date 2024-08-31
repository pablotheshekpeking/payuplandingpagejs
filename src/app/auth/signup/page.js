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
} from '@chakra-ui/react'
import { ArrowBackIcon, WarningTwoIcon } from "@chakra-ui/icons";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    businessName: "",
    accountType: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const toast = useToast();

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      const response = await fetch('{{URL}}/api/v1/users/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

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
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }
    } catch (error) {
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
      h={'100vh'}
      bg={'white'}
      display={'flex'}
      flexDirection={'row'}
    >
      <Box
        w={['full', 'full', 'full', '50%']}
        display={'flex'}
        flexDirection={'column'}
        h={'100vh'}
        justifyContent={'center'}
        px={['24px', '24px', '24px', '128px']}
        position="relative"
      >
        {step > 1 && (
          <Box
            position="absolute"
            top="24px"
            left="24px"
            onClick={handleBack}
            cursor={'pointer'}
          >
            <ArrowBackIcon boxSize={[10, 10, 20, 20]} />
          </Box>
        )}

        {step === 1 && (
          <>
            <Text fontWeight={600} fontSize={'24px'} pb={'16px'}>How will you use Pay Up?</Text>
            <Text fontSize={'18px'}>Please select an option below</Text>
            {/* Your existing content */}
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
              {/* Existing nested content */}
              <Box w={'60%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'16px'}>
                <Text fontWeight={500} fontSize={['14px', '14px', '14px', '20px']}>Sign up for personal use to</Text>
                <Box display={'flex'} gap={'8px'} alignItems={'center'}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#399500" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5227 5.97725C13.7424 6.19692 13.7424 6.55308 13.5227 6.77275L8.27275 12.0227C8.05308 12.2424 7.69692 12.2424 7.47725 12.0227L4.47725 9.02275C4.25758 8.80308 4.25758 8.44692 4.47725 8.22725C4.69692 8.00758 5.05308 8.00758 5.27275 8.22725L7.875 10.8295L12.7273 5.97725C12.9469 5.75758 13.3031 5.75758 13.5227 5.97725Z" fill="#E1E1E1" stroke="#E1E1E1" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <Text fontSize={['10px', '10px', '10px', '12px']} textAlign={'left'}>Foot all international bills on the go</Text>

                </Box>

                <Box display={'flex'} gap={'8px'} alignItems={'center'}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#399500" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5227 5.97725C13.7424 6.19692 13.7424 6.55308 13.5227 6.77275L8.27275 12.0227C8.05308 12.2424 7.69692 12.2424 7.47725 12.0227L4.47725 9.02275C4.25758 8.80308 4.25758 8.44692 4.47725 8.22725C4.69692 8.00758 5.05308 8.00758 5.27275 8.22725L7.875 10.8295L12.7273 5.97725C12.9469 5.75758 13.3031 5.75758 13.5227 5.97725Z" fill="#E1E1E1" stroke="#E1E1E1" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <Text fontSize={['10px', '10px', '10px', '12px']} textAlign={'left'}>Foot all international bills on the go</Text>

                </Box>

                <Box display={'flex'} gap={'8px'} alignItems={'center'}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="9" r="9" fill="#399500" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5227 5.97725C13.7424 6.19692 13.7424 6.55308 13.5227 6.77275L8.27275 12.0227C8.05308 12.2424 7.69692 12.2424 7.47725 12.0227L4.47725 9.02275C4.25758 8.80308 4.25758 8.44692 4.47725 8.22725C4.69692 8.00758 5.05308 8.00758 5.27275 8.22725L7.875 10.8295L12.7273 5.97725C12.9469 5.75758 13.3031 5.75758 13.5227 5.97725Z" fill="#E1E1E1" stroke="#E1E1E1" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  <Text fontSize={['10px', '10px', '10px', '12px']} textAlign={'left'}>Foot all international bills on the go</Text>

                </Box>
              </Box>
              <Box w={'40%'}>
                <Image src="/spiral.png" w={'full'} h={'full'} />
              </Box>
            </Box>

            <Box bg={'black'} maxW={'100%'} borderRadius={'20px'} display={'flex'} alignItems={'center'} justifyContent={'center'} p={'18px'} mt={'32px'} cursor={'pointer'} onClick={handleNextStep}>
              <Text color={'#F7F564'}>Get started</Text>
            </Box>
          </>
        )}

        {step === 2 && (
          <>
            <Box display={'flex'} h={'auto'} flexDirection={'column'} gap={'12px'} bg={'#FFF239'} border={'2px solid #111317'} borderRadius={'30px'} p={'20px'} justifyContent={'center'} alignItems={'center'}>
              <svg width="126" height="40" viewBox="0 0 126 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 30.4248V30.6748H1H7.60029H7.85029V30.4248V19.8296H13.5886C16.8952 19.8296 19.5395 18.8365 21.3595 17.1351C23.1806 15.4325 24.1543 13.0411 24.1543 10.2898C24.1543 7.51796 23.1809 5.12615 21.3593 3.42855C19.5389 1.73217 16.8944 0.75 13.5886 0.75H1H0.75V1V30.4248ZM44.7088 30.6748H44.9588V30.4248V16.8053C44.9588 14.3319 43.9069 12.2852 42.1392 10.8622C40.3758 9.44278 37.9128 8.65265 35.0925 8.65265C28.9601 8.65265 25.2366 12.1308 24.9644 16.5377L24.948 16.8031H25.2139H30.634H30.872L30.8837 16.5655C30.9244 15.7434 31.2593 14.9667 31.8894 14.3947C32.5188 13.8234 33.4607 13.4403 34.7428 13.4403C35.9507 13.4403 36.8743 13.736 37.4901 14.2174C38.0999 14.6942 38.4268 15.3668 38.4268 16.1748C38.4268 16.5623 38.3029 16.8832 38.0793 17.1066C37.8566 17.3293 37.5098 17.4801 37.0158 17.4801H33.3004C30.8551 17.4801 28.7834 18.1213 27.3179 19.3177C25.8468 20.5185 25.0076 22.2622 25.0076 24.4137C25.0076 28.1921 28.0749 31.0111 32.4699 31.0111C35.0697 31.0111 37.3174 30.0585 38.4268 28.4813V30.4248V30.6748H38.6768H44.7088ZM67.8022 9.32755L67.9306 8.98894H67.5684H61.3178H61.1381L61.0808 9.15932L56.7271 22.1188L52.3317 9.15864L52.2741 8.98894H52.0949H45.888H45.5254L45.6544 9.32786L53.5855 30.1671L41.7479 38.798L41.128 39.25H41.8952H56.466H56.6419L56.7013 39.0843L59.8032 30.4293L59.8047 30.4251L67.8022 9.32755ZM75.1962 0.75H74.9462V1V19.5796C74.9462 23.3591 76.2142 26.2284 78.4253 28.1492C80.6311 30.0654 83.7449 31.0111 87.3914 31.0111C91.0595 31.0111 94.1736 30.0655 96.3742 28.149C98.58 26.2279 99.8367 23.3584 99.8367 19.5796V1V0.75H99.5867H93.4672H93.2172V1V19.5796C93.2172 21.4554 92.6047 22.7995 91.593 23.6785C90.5758 24.5625 89.1224 25.0044 87.3914 25.0044C85.6605 25.0044 84.2187 24.5625 83.2126 23.6794C82.2118 22.8009 81.6094 21.4567 81.6094 19.5796V1V0.75H81.3594H75.1962ZM102.239 39V39.25H102.489H114.903H115.347L115.117 38.8705L109.61 29.7773C110.867 30.585 112.542 31.0111 114.378 31.0111C117.606 31.0111 120.329 29.9074 122.245 27.946C124.16 25.985 125.25 23.1866 125.25 19.8319C125.25 16.483 124.251 13.6858 122.447 11.7232C120.64 9.7584 118.046 8.65265 114.903 8.65265C112.297 8.65265 110.205 9.48498 108.815 10.894V9.23894V8.98894H108.565H102.489H102.239V9.23894V39ZM13.1952 14.0752H7.85029V6.50442H13.1952C14.6718 6.50442 15.6939 6.95928 16.3477 7.64121C17.004 8.32577 17.3163 9.26747 17.3163 10.2898C17.3163 11.3122 17.004 12.2539 16.3477 12.9384C15.6939 13.6204 14.6718 14.0752 13.1952 14.0752ZM38.4268 21.7234C38.4268 23.0165 38.0175 24.1504 37.2694 24.9585C36.5238 25.764 35.4236 26.2655 33.9998 26.2655C32.3781 26.2655 31.3212 25.3614 31.3212 24.1615C31.3212 23.4134 31.6181 22.8001 32.1191 22.3703C32.6232 21.9378 33.3489 21.6792 34.2183 21.6792H38.4268V21.7234ZM118.762 19.8319C118.762 21.5459 118.232 22.9533 117.336 23.9294C116.442 24.9038 115.166 25.4668 113.635 25.4668C112.059 25.4668 110.773 24.9027 109.88 23.9294C108.985 22.9541 108.465 21.5472 108.465 19.8319C108.465 18.0948 108.985 16.6774 109.88 15.6971C110.774 14.719 112.059 14.1549 113.635 14.1549C115.166 14.1549 116.441 14.7178 117.335 15.6971C118.231 16.6782 118.762 18.0961 118.762 19.8319Z" fill="black" stroke="black" stroke-width="0.5" />
              </svg>

              <Text w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                Create an Account
              </Text>

              <FormControl as={GridItem} colSpan={[6, 3]}>
                <Select
                  id="accountType"
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleInputChange}
                  placeholder="Account type"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  h={['24px', '24px', '64px', '64px']}
                  borderRadius={'20px'}
                  border={'1px solid black'}
                >
                  <option value="Personal">Personal</option>
                  <option value="Merchant">Merchant</option>
                </Select>
              </FormControl>

              <Box w={'100%'} display={'flex'} gap={'12px'}>
                <FormControl as={GridItem} colSpan={6}>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    h={'64px'}
                    borderRadius={'20px'}
                    border={'1px solid black'}
                  />
                </FormControl>

                <FormControl as={GridItem} colSpan={6}>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    focusBorderColor="brand.400"
                    shadow="sm"
                    size="sm"
                    w="full"
                    rounded="md"
                    h={'64px'}
                    borderRadius={'20px'}
                    border={'1px solid black'}
                  />
                </FormControl>
              </Box>

              <FormControl as={GridItem} colSpan={6}>
                <Input
                  type="text"
                  name="businessName"
                  id="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Business Name"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  h={['30px', '30px', '64px', '64px']}
                  borderRadius={'20px'}
                  border={'1px solid black'}
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={6}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  h={'64px'}
                  borderRadius={'20px'}
                  border={'1px solid black'}
                />
              </FormControl>

              <FormControl as={GridItem} colSpan={6}>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  focusBorderColor="brand.400"
                  shadow="sm"
                  size="sm"
                  w="full"
                  rounded="md"
                  h={'64px'}
                  borderRadius={'20px'}
                  border={'1px solid black'}
                />
              </FormControl>

              <Checkbox
                isChecked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                fontSize={'16px'}
              >
                I agree to Pay Up's <span style={{ fontWeight: 700, textDecoration: 'underline' }}>Terms and Conditions</span> and <span style={{ fontWeight: 700, textDecoration: 'underline' }}>Privacy Policy</span>.
              </Checkbox>

              <Button w={'100%'} h={'58px'} mt="24px" bg="black" onClick={handleSubmit} color={'#FFF239'} borderRadius={'20px'}>Sign Up</Button>
            </Box>
            <Center display={'flex'} alignItems={'center'} pt={'32px'} gap={'8px'}>
              <WarningTwoIcon />
              <Text>Secure Connection</Text>
            </Center>
          </>
        )}
      </Box>


      {/** background image */}
      <Box
        w={['0%', '0%', '0%', '50%']}
        display={['none', 'none', 'none', 'flex']}
        flexDirection="column"
        backgroundImage="url(/signbg.png)"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        h="100vh"
        px={'64px'}
        py={'48px'}
        justifyContent={'space-between'}
      >
        <Box display={'flex'} justifyContent={'right'}>
          <Box w={'400px'} px={'24px'} py={'12px'} bg={'#16160E6B'} display={'flex'} alignItems={'center'} borderRadius={'20px'}>
            <Text color={'white'} w={'45%'}>Have an account?</Text>
            <Link href={'./login'} style={{padding: 20, width: '45%'}}>
            <Box href={'../login'} bg={'white'} w={'full'} borderRadius={'14px'} cursor={'pointer'}>
              <Text textAlign={'center'} fontWeight={700}>Log in</Text>
            </Box>
            </Link>
          </Box>
        </Box>

        <Text fontWeight={500} textAlign={'left'} w={'500px'} color={'#C0C0C0'} fontSize={'24px'} lineHeight={'40px'}>
          Enter a realm of financial simplicity with our user-friendly p2p system where every transaction is a step forward.
        </Text>

        <Text fontWeight={500} textAlign={'left'} w={'323px'} color={'#C0C0C0'} lineHeight={'40px'}>
          © 2024 PayUp. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
