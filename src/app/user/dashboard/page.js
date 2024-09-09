'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Box, Text, Button, Spinner } from '@chakra-ui/react';
import DashboardSideNav from "../../components/dashsidenav";
import UserTopBar from "@/app/components/usertopbar";
import UserFooter from "@/app/components/userfooter";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch user data from localStorage
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    } else {
      // If no user data, redirect to login page
      router.push('../auth/login');
    }
  }, [router]);



  return (
    <Box
      w={'full'}
      h={['auto', 'auto', '100vh', '100vh']}
      bg={'#F8F8F8'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {user ? (
        <Box
          w={'full'}
          display={'flex'}
          h={'100%'}
          flexDirection={'column'}
        >
          <Box
            w={'full'}
            display={'flex'}
            h={'100%'}
            pb={'80px'}
          >
            <Box display={['none', 'none', 'flex', 'flex']}>
              <DashboardSideNav />
            </Box>

            <Box
              w={'100%'}
              h={'100%'}
              px={['20px', '20px', '40px', '40px']}
              pt={'24px'}
            >
              <UserTopBar />

              <Text fontSize={['18px', '18px', '24px', '24px']} pt={['30px', '30px', '0px', '0px']}>Welcome {user.firstName}!</Text>
              <Text fontWeight={700} fontSize={'32px'}>Dashboard</Text>

              <Box w={'full'} h={'600px'} pt={'30px'} display={'flex'} flexDirection={['column', 'column', 'column', 'row']} gap={'28px'}>
                <Box w={['full', 'full', 'full', '50%']} h={'full'} display={'flex'} flexDirection={'column'} gap={'20px'}>
                  {/** account balance */}
                  <Box w={'full'} h={['auto', 'auto', 'auto', '50%']} bg={'#FFF239'} border={'1px solid black'} borderRight={'4px solid black'} borderBottom={'4px solid black'} borderRadius={'8px'} p={'24px'} display={'flex'} alignItems={'center'} gap={['10px', '10px', '80px', '100px']}>
                    <Box w={'50%'} h={'full'} display={'flex'} flexDirection={'column'} gap={['8px', '8px', '16px', '16px']}>
                      <Text fontWeight={600} fontSize={['10px', '10px', '20px', '20px']}>Account balance</Text>
                      <Box display={'flex'} flexDirection={'column'}>
                        <Box display={'flex'} gap={'12px'} alignItems={'center'}>
                          <Box className="flagplaceholder" w={['20px', '20px', '40px', '40px']} h={['20px', '20px', '40px', '40px']} borderRadius={['10px', '10px', '20px', '20px']} bg={'green'}></Box>
                          <Text fontWeight={600} fontSize={['24px', '24px', '64px', '64px']}>
                            000<span style={{ fontSize: '0.6em', verticalAlign: 'super' }}>.00</span>
                          </Text>
                        </Box>
                        <Text fontSize={['10px', '10px', '16px', '16px']}>Yesterday NGN 000.00</Text>
                        <Box w={'full'} display={'flex'} gap={'8px'} pt={'16px'}>
                          <Button w={'50%'} h={'52px'} p={'20px'} bg={'black'} color={'white'} fontSize={['10px', '10px', '16px', '16px']}>Deposit</Button>
                          <Button w={'50%'} h={'52px'} p={'20px'} bg={'black'} color={'white'} fontSize={['10px', '10px', '16px', '16px']}>Withdraw</Button>
                        </Box>
                      </Box>
                    </Box>
                    <Box display={'flex'} w={'50%'} justifyContent={'space-between'} alignItems={'center'}>
                      <Box>
                        <Text fontWeight={500} fontSize={['10px', '10px', '12px', '12px']}>Providus Bank</Text>
                        <Text className="accountnumber" fontWeight={700} fontSize={['12px', '12px', '24px', '24px']}>2242433656</Text>
                        <Text fontWeight={500} fontSize={['10px', '10px', '14px', '14px']}>Account no.</Text>
                      </Box>

                      <Button bg={'black'} w={'32px'} h={'32px'} display={'flex'} justifyContent={'center'} alignItems={'center'} p={'10px'} borderRadius={'8px'}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.83301 8.05648C5.83301 7.46704 6.06716 6.90174 6.48396 6.48494C6.90076 6.06814 7.46606 5.83398 8.05551 5.83398H15.2772C15.569 5.83398 15.858 5.89147 16.1277 6.00316C16.3973 6.11485 16.6423 6.27856 16.8487 6.48494C17.0551 6.69132 17.2188 6.93632 17.3305 7.20597C17.4422 7.47562 17.4997 7.76462 17.4997 8.05648V15.2782C17.4997 15.57 17.4422 15.859 17.3305 16.1287C17.2188 16.3983 17.0551 16.6433 16.8487 16.8497C16.6423 17.0561 16.3973 17.2198 16.1277 17.3315C15.858 17.4432 15.569 17.5007 15.2772 17.5007H8.05551C7.76364 17.5007 7.47464 17.4432 7.20499 17.3315C6.93535 17.2198 6.69034 17.0561 6.48396 16.8497C6.27758 16.6433 6.11388 16.3983 6.00219 16.1287C5.89049 15.859 5.83301 15.57 5.83301 15.2782V8.05648Z" stroke="#E2E2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M3.34333 13.9475C3.0875 13.8021 2.87471 13.5916 2.72658 13.3374C2.57846 13.0832 2.50028 12.7942 2.5 12.5V4.16667C2.5 3.25 3.25 2.5 4.16667 2.5H12.5C13.125 2.5 13.465 2.82083 13.75 3.33333" stroke="#E2E2E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </Button>
                    </Box>
                  </Box>
                  <Box w={'full'} h={'50%'} display={'flex'} gap={'16px'}>
                    <Box w={'50%'} h={'full'} bg={'#F7EBE8'} borderRadius={'8px'}></Box>
                    <Box w={'50%'} h={'full'} bg={'#E2E2E299'} borderRadius={'8px'}></Box>
                  </Box>
                </Box>
                <Box w={['full', 'full', 'full', '50%']} h={'full'} bg={'black'} borderRadius={'8px'}></Box>
              </Box>
            </Box>
          </Box>
          <Box w={'full'} h={'auto'} display={['flex', 'flex', 'none', 'none']} position={'fixed'} bottom={0}>
            <UserFooter />
          </Box>
        </Box>
      ) : (
        <Spinner size="md" color="black" />
      )}
    </Box>
  );
}
