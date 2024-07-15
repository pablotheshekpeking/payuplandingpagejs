'use client'

import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Solution() {
    return (
        <Box
        display={'flex'}
        alignItems={'center'}
        w={'full'}
        h={'100vh'}
        justifyContent={'center'}
        pt={['0px', '0px', '200px', '200px']}
        px={'24px'}
        >
        <Box
            w={'full'}
            h={'100%'}
            display={'flex'}
            flexDirection={['column', 'column', 'row', 'row']}
            justifyContent={'center'}
            gap={['50px', '50px', '144px', '144px']}
        >
            <Text
                w={['100%', '100%', '420px', '420px']}
                h={['100px', '100px', '231px', '231px']}
                fontWeight={400}
                fontSize={['15px', '15px', '20px', '20px']}
                fontFamily={'Roobert Pro'}
            >
                <span style={{ fontSize: ['15px', '15px', '30px', '30px'], fontFamily: 'Roobert Pro' }}>
                    Creating a <span style={{ fontWeight: 700 }}>financial solution</span> for our currency to thrive.
                </span>
                {' '}
                With our peer-to-peer system, footing bills and invoices have been made easier. All you need to do is fund your Payup account with NGN.
            </Text>


            <Box
                w={'650px'}
                h={'423px'}
                maxW={'100%'}
            >
                <Image src={'/solution.png'} width={610} height={403} />
            </Box>
        </Box>
        </Box>
    );
}