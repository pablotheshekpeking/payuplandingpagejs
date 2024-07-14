'use client'

import { Box, Text } from "@chakra-ui/react";

export default function Contact() {
    return (
        <Box
            w={'full'}
            h={'100vh'}
            px={['24px', '24px', '150px', '150px']}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            fontFamily={'Roobert Pro'}
        >
            <Text fontWeight={600} fontSize={['40px', '40px', '64px', '64px']}>Contact us</Text>
            <Text w={'877px'} maxW={'100%'} fontSize={['12px', '12px', '24px', '24px']}>Hi there, incase are you looking to reach out, got questions or suggestions ? Send a message, we’ll be in touch.</Text>
            {/**contact boxes start */}
            <Box
                w={'full'}
                display={'flex'}
                flexDirection={['column', 'column', 'row', 'row']}
                h={'354px'}
                mt={'40px'}
                gap={'30px'}
            >
                <Box
                    w={['100%', '100%', '70%', '70%']}
                    h={'full'}
                    display={'flex'}
                    flexDirection={'row'}
                    gap={'30px'}
                >
                    {/** white content section */}
                    <Box
                        bg={'white'}
                        w={'50%'}
                        h={'full'}
                        borderRadius={'12px'}
                    >

                    </Box>

                    <Box
                        bg={'white'}
                        w={'50%'}
                        h={'full'}
                        borderRadius={'12px'}
                    >

                    </Box>
                </Box>


                {/** social media section */}
                <Box
                    w={['100%', '100%', '30%', '30%']}
                    h={'full'}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={'24px'}
                >
                    <Box
                        w={'full'}
                        h={'56px'}
                        borderRadius={'12px'}
                        bg={'white'}
                        display={'flex'}
                        flexDirection={'row'}
                        gap={'12px'}
                        alignItems={'center'}
                        px={'24px'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.0007 6.99956C16.0007 6.44727 16.4484 5.99956 17.0007 5.99956C17.553 5.99956 18.0007 6.44727 18.0007 6.99956C18.0007 7.55184 17.553 7.99956 17.0007 7.99956C16.4484 7.99956 16.0007 7.55184 16.0007 6.99956Z" fill="url(#paint0_linear_1523_2366)" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0007 7.24956C9.37732 7.24956 7.25067 9.3762 7.25067 11.9996C7.25067 14.6229 9.37732 16.7496 12.0007 16.7496C14.624 16.7496 16.7507 14.6229 16.7507 11.9996C16.7507 9.3762 14.624 7.24956 12.0007 7.24956ZM8.75067 11.9996C8.75067 10.2046 10.2057 8.74956 12.0007 8.74956C13.7956 8.74956 15.2507 10.2046 15.2507 11.9996C15.2507 13.7945 13.7956 15.2496 12.0007 15.2496C10.2057 15.2496 8.75067 13.7945 8.75067 11.9996Z" fill="url(#paint1_linear_1523_2366)" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2589 2.83257C13.7924 2.44513 10.209 2.44513 6.74244 2.83257C4.73038 3.05745 3.10605 4.64246 2.8695 6.66499C2.45496 10.2093 2.45496 13.7898 2.8695 17.3341C3.10605 19.3567 4.73038 20.9417 6.74244 21.1665C10.209 21.554 13.7924 21.554 17.2589 21.1665C19.271 20.9417 20.8953 19.3567 21.1319 17.3341C21.5464 13.7898 21.5464 10.2093 21.1319 6.66499C20.8953 4.64246 19.271 3.05745 17.2589 2.83257ZM6.90905 4.32329C10.2649 3.94823 13.7365 3.94823 17.0923 4.32329C18.4224 4.47195 19.4879 5.52156 19.642 6.83924C20.043 10.2678 20.043 13.7313 19.642 17.1599C19.4879 18.4775 18.4224 19.5272 17.0923 19.6758C13.7365 20.0509 10.2649 20.0509 6.90905 19.6758C5.57894 19.5272 4.51346 18.4775 4.35934 17.1599C3.95834 13.7313 3.95834 10.2678 4.35934 6.83924C4.51346 5.52156 5.57894 4.47195 6.90905 4.32329Z" fill="url(#paint2_linear_1523_2366)" />
                            <defs>
                                <linearGradient id="paint0_linear_1523_2366" x1="12.0007" y1="2.54199" x2="23" y2="5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FC5D5D" />
                                    <stop offset="1" stop-color="#84E523" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1523_2366" x1="12.0007" y1="2.54199" x2="23" y2="5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FC5D5D" />
                                    <stop offset="1" stop-color="#84E523" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_1523_2366" x1="12.0007" y1="2.54199" x2="23" y2="5" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FC5D5D" />
                                    <stop offset="1" stop-color="#84E523" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <Text fontSize={'20px'}>Instagram</Text>
                    </Box>

                    <Box
                        w={'full'}
                        h={'56px'}
                        borderRadius={'12px'}
                        bg={'white'}
                        display={'flex'}
                        flexDirection={'row'}
                        gap={'12px'}
                        alignItems={'center'}
                        px={'24px'}
                    >
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 16.5L14.5 1" stroke="black" />
                            <path d="M0.36182 1.97135L15.469 15.9095" stroke="black" />
                        </svg>

                        <Text fontSize={'20px'}>Twitter</Text>
                    </Box>

                    <Box
                        w={'full'}
                        h={'56px'}
                        borderRadius={'12px'}
                        bg={'white'}
                        display={'flex'}
                        flexDirection={'row'}
                        gap={'12px'}
                        alignItems={'center'}
                        px={'24px'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4877 3.78769C11.4723 2.80312 12.8076 2.25 14.2 2.25H16.9C17.3142 2.25 17.65 2.58579 17.65 3V6.6C17.65 7.01421 17.3142 7.35 16.9 7.35H14.2C14.1602 7.35 14.1221 7.3658 14.0939 7.39393C14.0658 7.42206 14.05 7.46022 14.05 7.5V9.45H16.9C17.131 9.45 17.349 9.5564 17.4912 9.73844C17.6333 9.92048 17.6836 10.1578 17.6276 10.3819L16.7276 13.9819C16.6441 14.3158 16.3442 14.55 16 14.55H14.05V21C14.05 21.4142 13.7142 21.75 13.3 21.75H9.7C9.28579 21.75 8.95 21.4142 8.95 21V14.55H7C6.58579 14.55 6.25 14.2142 6.25 13.8V10.2C6.25 9.78579 6.58579 9.45 7 9.45H8.95V7.5C8.95 6.10761 9.50312 4.77226 10.4877 3.78769ZM14.2 3.75C13.2054 3.75 12.2516 4.14509 11.5483 4.84835C10.8451 5.55161 10.45 6.50544 10.45 7.5V10.2C10.45 10.6142 10.1142 10.95 9.7 10.95H7.75V13.05H9.7C10.1142 13.05 10.45 13.3858 10.45 13.8V20.25H12.55V13.8C12.55 13.3858 12.8858 13.05 13.3 13.05H15.4144L15.9394 10.95H13.3C12.8858 10.95 12.55 10.6142 12.55 10.2V7.5C12.55 7.06239 12.7238 6.64271 13.0333 6.33327C13.3427 6.02384 13.7624 5.85 14.2 5.85H16.15V3.75H14.2Z" fill="black" />
                        </svg>

                        <Text fontSize={'20px'}>Facebook</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}