'use client'

import { Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";

export default function Open() {
    return (
        <Box
            w={'full'}
            h={'100vh'}
            px={'24px'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box
                w={'full'}
                display={'flex'}
                flexDirection={['column', 'column', 'row', 'row']}
                gap={['40px', '40px', '80px', '80px']}
                justifyContent={'center'}
            >
                <Image src={'/oldlady.png'} width={572} height={382} />

                <Image src={'/blackguy.png'} width={572} height={382} />
            </Box>
            <Text
            w={'942px'}
            maxW={'100%'}
            textAlign={'center'}
            pt={'30px'}
            fontFamily={'Roobert Pro'}
            >
                A world where you can effortlessly transact across continents as easily as you would in your local shop {" "} <span style={{ fontWeight: 700 }}>"your conduit to efficient and secure international transactions"</span> .
            </Text>

            <Button bg={'black'} color={'#FFF239'} mt={'30px'} fontFamily={'Roobert Pro'}>
                Open a Payup account
            </Button>
        </Box>
    );
}