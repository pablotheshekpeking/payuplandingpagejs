'use client'

import { Box, Text } from "@chakra-ui/react";

export default function Features() {
    return (
        <Box
            w={'full'}
            h={'50vh'}
            display={'grid'}
            gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
            gap={'24px'}
        >
            <Box
                h={['250px', '250px', '328px', '328px']}
                bg={'white'}
                borderRadius={'12px'}
                p={'40px'}
                display={'flex'}
                flexDirection={'column'}
                _hover={{ borderLeft: '8px solid #FFF239', borderBottom: '8px solid #FFF239' }}
                gap={'20px'}
            >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="28" fill="#2AC44B" fill-opacity="0.2" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36 35V25C37.1046 25 38 24.1046 38 23V21C38 19.8954 37.1046 19 36 19H20C18.8954 19 18 19.8954 18 21V23C18 24.1046 18.8954 25 20 25V35C20 36.1046 20.8954 37 22 37H34C35.1046 37 36 36.1046 36 35ZM22 35V25H34V35H22ZM25 28V26H31V28H25ZM20 23V21H36V23H20Z" fill="#30B14B" />
                </svg>

                <Text
                    fontSize={'20px'}
                    lineHeight={'40px'}
                    fontWeight={'400'}
                >
                    Manage , pay and reconcile reoccuring bills and invoices
                </Text>

            </Box>

            <Box
                h={['250px', '250px', '328px', '328px']}
                bg={'white'}
                borderRadius={'12px'}
                p={'40px'}
                display={'flex'}
                flexDirection={'column'}
                _hover={{ borderLeft: '8px solid #FFF239', borderBottom: '8px solid #FFF239' }}
                gap={'20px'}
            >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="28" fill="#4267DF" fill-opacity="0.2" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.4506 17.4027C32.5126 17.0992 33.6196 17.7142 33.923 18.7763C33.9741 18.955 34 19.1399 34 19.3257V21H36C37.1046 21 38 21.8954 38 23V35C38 36.1045 37.1046 37 36 37H20C18.8954 37 18 36.1045 18 35H18.0267C18.009 34.8924 18 34.7835 18 34.6742V22.7543C18 21.8613 18.592 21.0765 19.4506 20.8312L31.4506 17.4027ZM26.1401 35H36V27H34V31.2457C34 32.1386 33.408 32.9234 32.5494 33.1687L26.1401 35ZM36 23V25H34V23H36ZM20 22.7547V34.6747L32 31.2461V19.3262L20 22.7547ZM30 25C30 25.5523 29.5523 26 29 26C28.4477 26 28 25.5523 28 25C28 24.4477 28.4477 24 29 24C29.5523 24 30 24.4477 30 25Z" fill="#4267DF" />
                </svg>


                <Text
                    fontSize={'20px'}
                    lineHeight={'40px'}
                    fontWeight={'400'}
                >
                    Easily save in any currency and track your equivalents as market rates change.
                </Text>

            </Box>

            <Box
                h={['250px', '250px', '328px', '328px']}
                bg={'white'}
                borderRadius={'12px'}
                p={'40px'}
                display={'flex'}
                flexDirection={'column'}
                _hover={{ borderLeft: '8px solid #FFF239', borderBottom: '8px solid #FFF239' }}
                gap={'20px'}
            >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="28" fill="#FFF239" fill-opacity="0.64" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M37.1818 19H18.8182C17.814 19 17 19.8954 17 21V33C17 34.1046 17.814 35 18.8182 35H30V33H19V26H37V29H39V21C39 19.8954 38.186 19 37.1818 19ZM37 24V21H19V24H37ZM33 35V33H35V31H37V33H39V35H37V37H35V35H33Z" fill="#3A3A3A" />
                </svg>



                <Text
                    fontSize={'20px'}
                    lineHeight={'40px'}
                    fontWeight={'400'}
                >
                    Create your own contactless prepaid card for unlimited shopping with your chosen plan.
                </Text>

            </Box>

            <Box
                h={['250px', '250px', '328px', '328px']}
                bg={'white'}
                borderRadius={'12px'}
                p={'40px'}
                display={'flex'}
                flexDirection={'column'}
                _hover={{ borderLeft: '8px solid #FFF239', borderBottom: '8px solid #FFF239' }}
                gap={'20px'}
            >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="28" fill="#A851FE" fill-opacity="0.2" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.497 23C21.1688 22.4634 21 21.8029 21 21C21 19.4171 22.1904 18 24 18C25.812 18 27.2733 19.2136 28 21.1138C28.7267 19.2136 30.188 18 32 18C33.8096 18 35 19.4171 35 21C35 21.8029 34.8312 22.4634 34.503 23H36C37.1046 23 38 23.8954 38 25V27C38 28.1046 37.1046 29 36 29V36C36 37.1046 35.1046 38 34 38H22C20.8954 38 20 37.1046 20 36V29C18.8954 29 18 28.1046 18 27V25C18 23.8954 18.8954 23 20 23H21.497ZM27 25H20V27H27V25ZM36 27H29V25H36V27ZM27 36V29H22V36H27ZM34 36H29V29H34V36ZM24 20C23.3796 20 23 20.452 23 21C23 22.2532 24.017 22.8491 26.4294 22.9745C26.1613 21.1116 25.1622 20 24 20ZM29.5 22.9745C29.7681 21.1116 30.7672 20 31.9294 20C32.5498 20 32.9294 20.452 32.9294 21C32.9294 22.2532 31.9124 22.8491 29.5 22.9745Z" fill="#A851FF" fill-opacity="0.96" />
                </svg>



                <Text
                    fontSize={'20px'}
                    lineHeight={'40px'}
                    fontWeight={'400'}
                >
                    Transfer funds or pay a bill with Pay Up. Gift and make loved ones smile.
                </Text>

            </Box>
        </Box>
    );
}