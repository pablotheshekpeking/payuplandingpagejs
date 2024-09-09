'use client'
import React, { useState, useRef, useEffect, useDisclosure } from "react";
import { Box, Button, Text } from '@chakra-ui/react';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import DashboardSideNav from "./dashsidenav";

export default function UserTopBar() {
    return (
        <Box
            w={'full'}
            h={'50px'}
            display={'flex'}
            justifyContent={'right'}
            alignItems={'center'}
        >
            <Box
                w={['100%', '100%', '400', '400']}
                display={'flex'}
                gap={'24px'}
                alignItems={'center'}
            >
                <Button
                    display={'flex'}
                    gap={'8px'}
                    bg={'#FFF239'}
                    w={'120px'}
                    border={'1px solid black'}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.99902 12.001C1.99902 8.22998 1.99902 6.34398 3.17102 5.17298C4.34302 4.00198 6.22802 4.00098 9.99902 4.00098H13.999C17.77 4.00098 19.656 4.00098 20.827 5.17298C21.998 6.34498 21.999 8.22998 21.999 12.001C21.999 15.772 21.999 17.658 20.827 18.829C19.655 20 17.77 20.001 13.999 20.001H9.99902C6.22802 20.001 4.34202 20.001 3.17102 18.829C2.00002 17.657 1.99902 15.772 1.99902 12.001Z" stroke="#111111" stroke-width="1.5" />
                        <path d="M9.99902 16.001H5.99902M13.999 16.001H12.499M1.99902 10.001H21.999" stroke="#111111" stroke-width="1.5" stroke-linecap="round" />
                    </svg>

                    <Text>Spend</Text>
                </Button>

                <Button
                    display={'flex'}
                    gap={'8px'}
                    bg={'black'}
                    w={'120px'}
                    color={'white'}
                >
                    <Text>Pay bill</Text>
                </Button>

                <svg className="notificationicon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.64994 3.0781L8 2.96806V2.60111V2.22222C8 1.78574 8.19456 1.35334 8.56441 1.02458C8.93619 0.694109 9.4518 0.5 10 0.5C10.5482 0.5 11.0638 0.694109 11.4356 1.02458C11.8054 1.35334 12 1.78574 12 2.22222V2.60111V2.968L12.35 3.07808C13.7239 3.51017 14.9035 4.30723 15.7327 5.34996C16.561 6.39167 17.0002 7.62809 17 8.88882V8.88889V14.4444V14.9444H17.5H18.75C18.9667 14.9444 19.1643 15.0215 19.3017 15.1436C19.4371 15.264 19.5 15.4138 19.5 15.5556C19.5 15.6974 19.4371 15.8471 19.3017 15.9675C19.1643 16.0896 18.9667 16.1667 18.75 16.1667H1.25C1.03332 16.1667 0.835655 16.0896 0.698299 15.9675C0.56286 15.8471 0.5 15.6974 0.5 15.5556C0.5 15.4138 0.56286 15.264 0.698299 15.1436C0.835656 15.0215 1.03332 14.9444 1.25 14.9444H2.5H3V14.4444V8.88889C3 6.24286 4.9073 3.94026 7.64994 3.0781ZM10 19.5C9.4518 19.5 8.93619 19.3059 8.56441 18.9754C8.33794 18.7741 8.1772 18.5339 8.0866 18.2778H11.9134C11.8228 18.5339 11.6621 18.7741 11.4356 18.9754C11.0638 19.3059 10.5482 19.5 10 19.5Z" fill="#111317" stroke="black" />
                </svg>

                <Box w={'20px'} h={'20px'} bg={'grey'} borderRadius={'10px'} display={['none', 'none', 'block', 'block']}></Box>

                <Popover display={['block', 'block', 'none', 'none']}>
                    <PopoverTrigger display={['block', 'block', 'none', 'none']}>
                        <Button display={['block', 'block', 'none', 'none']}><HamburgerIcon /></Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Navigation!</PopoverHeader>
                        <PopoverBody>
                            <DashboardSideNav />
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>
        </Box>
    );
}
