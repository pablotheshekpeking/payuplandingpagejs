'use client'

import { Box, Center, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Why() {
    return (
        <Box
            w={'full'}
            h={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            px={['24px', '24px', '100px', '100px']}
            mt={['340px', '340px', '0px', '0px']}
        >
            <Box
                w={'full'}
                h={['1000px', '1000px', 'auto', 'auto']}
                maxW={'full'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >

                <Image src={'/whyimg.png'} width={1279.68} height={[140, 140, 434.27, 434.27]} />


            </Box>
        </Box>
    );
}