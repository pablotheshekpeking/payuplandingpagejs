'use client'

import { Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import {
    FormControl,
    Input,
    Textarea
} from '@chakra-ui/react'

export default function Contact() {
    return (
        <Box
            w={'full'}
            h={'100vh'}
            px={['24px', '24px', '150px', '150px']}
            display={'flex'}
            flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}
            justifyContent={'center'}
            fontFamily={'Roobert Pro'}
            alignItems={'center'}
            gap={['24px', '24px', '80px', '80px']}
            pb={['150px', '150px', '200px', '200px']}
        >
            <Box
                w={['full', 'full', '50%', '50%']}
                h={'560px'}
            >
                <Text fontWeight={600} fontSize={['40px', '40px', '64px', '64px']}>Leave a message</Text>
                <Text width={'489px'} maxW={'100%'} fontSize={['12px', '12px', '20px', '20px']}>If you have questions to ask or suggestions to make , reach out to us </Text>

                <FormControl
                    pt={'32px'}
                    w={'full'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={'16px'}
                >
                    <Box
                        display={'flex'}
                        border={'1px solid #000000'}
                        width={['80%', '80%', '354px', '354px']}
                        h={'56px'}
                        p={'14px 16px'}
                        borderRadius={'12px'}
                        bg={'white'}
                        flexDirection={'row'}
                        gap={'2px'}
                        alignItems={'center'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.85716 6.83913C5.62474 6.71398 5.34363 6.72023 5.117 6.85559C4.89037 6.99096 4.75159 7.2355 4.75159 7.49948V16.9995C4.75159 17.4137 5.08737 17.7495 5.50159 17.7495C5.9158 17.7495 6.25159 17.4137 6.25159 16.9995V8.75514L11.646 11.6598C11.868 11.7794 12.1352 11.7794 12.3572 11.6598L17.7516 8.75514V16.9995C17.7516 17.4137 18.0874 17.7495 18.5016 17.7495C18.9158 17.7495 19.2516 17.4137 19.2516 16.9995V7.49948C19.2516 7.2355 19.1128 6.99096 18.8862 6.85559C18.6595 6.72023 18.3784 6.71398 18.146 6.83913L12.0016 10.1477L5.85716 6.83913Z" fill="black" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.3122 3.72132C13.7788 3.40539 10.2244 3.40539 6.69101 3.72132L5.17367 3.85698C3.54606 4.00251 2.23098 5.24593 1.99459 6.86285C1.49659 10.2692 1.49659 13.7298 1.99459 17.1361C2.23098 18.753 3.54606 19.9964 5.17367 20.142L6.69101 20.2776C10.2244 20.5936 13.7788 20.5936 17.3122 20.2776L18.8295 20.142C20.4571 19.9964 21.7722 18.753 22.0086 17.1361C22.5066 13.7298 22.5066 10.2692 22.0086 6.86285C21.7722 5.24593 20.4571 4.00251 18.8295 3.85698L17.3122 3.72132ZM6.8246 5.21536C10.2691 4.90738 13.7341 4.90738 17.1786 5.21536L18.6959 5.35102C19.6321 5.43472 20.3884 6.14988 20.5244 7.07984C21.0013 10.3423 21.0013 13.6567 20.5244 16.9191C20.3884 17.8491 19.6321 18.5642 18.6959 18.6479L17.1786 18.7836C13.7341 19.0916 10.2691 19.0916 6.8246 18.7836L5.30726 18.6479C4.37114 18.5642 3.61478 17.8491 3.47881 16.9191C3.00185 13.6567 3.00185 10.3423 3.47881 7.07984C3.61478 6.14988 4.37114 5.43472 5.30726 5.35102L6.8246 5.21536Z" fill="black" />
                        </svg>
                        <Input
                            type='email'
                            border='none'
                            flex='1'
                            placeholder='email'
                        />
                    </Box>
                    <Textarea placeholder='Send message here' height={'219px'} border={'1px solid #000000'} bg={'white'} />

                    <Box
                        w={'full'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        flexDirection={['column', 'column', 'row',  'row']}
                    >
                        <Box
                            className="socials"
                            display={'flex'}
                            gap={'24px'}
                            flexDirection={'row'}
                            alignItems={'center'}
                        >
                            <Image src={'/ig.png'} width={32} height={32} />

                            <Image src={'/x.png'} width={32} height={32} />

                            <Image src={'/linkedin.png'} width={32} height={32} />

                        </Box>
                        <Button type="submit" variant='primary' w={'178px'} h={'52px'} mt={'16px'} bg={'black'} color={'white'} borderRadius={'12px'}>
                            Send
                        </Button>
                    </Box>
                </FormControl>


            </Box>

            <Box
                w={['full', 'full', '50%', '50%']}
                h={'auto'}
            >
                <Image src={'/contact.png'} width={824} height={560} />

            </Box>
        </Box>
    );
}