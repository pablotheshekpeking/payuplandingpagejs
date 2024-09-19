'use client'
import React from "react";
import { Box, Divider, Icon, Text, ButtonGroup, Button } from "@chakra-ui/react";
import Link from "next/link";
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

export default function Footer() {

    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const targetElement = document.querySelector(sectionId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    const initialFocusRef = React.useRef()
    return (
        <Box
            w={'full'}
            h={'100vh'}
            display={'flex'}
            flexDirection={'column'}
        >
            {/** signup banner */}
            <Box
                w={'full'}
                display={'flex'}
                flexDirection={'row'}
                bg={'white'}
                h={'56px'}
                alignItems={'center'}
                px={'24px'}
                justifyContent={'space-between'}
                borderTop={'1px solid black'}
                borderBottom={'1px solid black'}
            >
                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    w={['100%', '100%', '100%', '50%']}
                    alignItems={'center'}
                >
                    <Icon w={'10px'} h={'10px'} viewBox='0 0 200 200' color='black.500'>
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>

                    <Text w={'140px'} fontSize={['8px', '8px', '14px', '14px']}>Sign up on Payup</Text>

                    <Icon w={'10px'} h={'10px'} viewBox='0 0 200 200' color='black.500'>
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>

                    <Text w={'140px'} fontSize={['8px', '8px', '14px', '14px']}>Sign up on Payup</Text>

                    <Icon w={'10px'} h={'10px'} viewBox='0 0 200 200' color='black.500'>
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>

                    <Text w={'140px'} fontSize={['8px', '8px', '14px', '14px']}>Sign up on Payup</Text>

                    <Icon w={'10px'} h={'10px'} viewBox='0 0 200 200' color='black.500'>
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>

                    <Text w={'140px'} fontSize={['8px', '8px', '14px', '14px']}>Sign up on Payup</Text>

                </Box>

                <Box
                    display={['none', 'none', 'none', 'flex']}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    w={['100%', '100%', '50%', '50%']}
                    alignItems={'center'}
                >
                    <Icon w={'10px'} h={'10px'} viewBox='0 0 200 200' color='black.500'>
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>

                    <Text w={'140px'} fontSize={['8px', '8px', '14px', '14px']}>Sign up on Payup</Text>

                    <Icon w={'10px'} h={'10px'} viewBox='0 0 200 200' color='black.500'>
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>

                    <Text w={'140px'} fontSize={['8px', '8px', '14px', '14px']}>Sign up on Payup</Text>

                    <Icon w={'10px'} h={'10px'} viewBox='0 0 200 200' color='black.500'>
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>

                    <Text w={'140px'} fontSize={['8px', '8px', '14px', '14px']}>Sign up on Payup</Text>

                    <Icon w={'10px'} h={'10px'} viewBox='0 0 200 200' color='black.500'>
                        <path
                            fill='currentColor'
                            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                        />
                    </Icon>

                    <Text w={'140px'} fontSize={['8px', '8px', '14px', '14px']}>Sign up on Payup</Text>

                </Box>
            </Box>

            {/** footer body */}
            <Box
                display={'flex'}
                flexDirection={'column'}
                bg={'#FFF239'}
                h={'100%'}
                px={'24px'}
                fontSize={['12px', '12px', '18px', '18px']}
            >
                <Box
                    display={'flex'}
                    flexDirection={['column', 'column', 'column', 'row']}
                    width={'full'}
                    h={'50%'}
                >
                    <Box
                        w={['100%', '100%', '100%', '50%']}
                        h={'full'}
                        display={'flex'}
                        flexDirection={['row', 'row', 'row', 'column']}
                        justifyContent={'center'}
                        alignItems={['center', 'center', 'center', 'flex-end']}
                        gap={'64px'}
                        px={['24px', '24px', '64px', '64px']}
                    >
                        <Text>Terms & Conditions</Text>

                        <Text>© 2024 PayUp. All rights reserved.</Text>
                    </Box>
                    <Divider h={['1px', '1px', '1px', '100%']} orientation='vertical' border={'1px solid black'} />
                    <Box
                        w={['100%', '100%', '100%', '50%']}
                        h={'full'}
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={['24px', '24px', '140px', '140px']}
                        px={['24px', '24px', '64px', '64px']}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'16px'}
                        >
                            <Link href={'#about'} passHref onClick={(e) => handleScroll(e, '#about')}><Text>About</Text></Link>
                            <Link href={'#faq'} passHref onClick={(e) => handleScroll(e, '#faq')}><Text>FAQ</Text></Link>
                            <Link href={'#contact'} passHref onClick={(e) => handleScroll(e, '#contact')}><Text>Contact</Text></Link>
                        </Box>

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'16px'}
                        >
                            <Text>Instagram</Text>
                            <Text>Twitter</Text>
                            <Text>LinkedIn</Text>
                        </Box>

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'16px'}
                        >
                            <Link href={''}><Text textDecoration={'underline'}>See on Map</Text></Link>
                            <Text>{" "}</Text>
                            <Text>{" "}</Text>
                            <Text>{" "}</Text>
                            <Text>{" "}</Text>
                            <Text display={['none', 'none', 'block', 'block']}>{" "}</Text>
                            <Text display={['none', 'none', 'block', 'block']}>{" "}</Text>
                        </Box>


                    </Box>
                </Box>
                <Divider orientation='horizontal' border={'1px solid black'} />
                <Box
                    display={'flex'}
                    flexDirection={['column', 'column', 'row', 'row']}
                    width={'full'}
                    h={'50%'}
                >
                    <Box
                        w={['100%', '100%', '50%', '50%']}
                        h={'full'}
                        display={'flex'}
                        flexDirection={['row', 'row', 'column', 'column']}
                        justifyContent={'center'}
                        alignItems={'center'}
                        px={['24px', '24px', '64px', '64px']}
                        maxW={'100%'}
                    >
                        <svg width="100%" height="100%" viewBox="0 0 702 210" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M130.882 89.6805L130.885 89.6769C136.836 81.1276 139.803 70.985 139.803 59.2725C139.803 50.2912 137.824 42.2063 133.857 35.0299C130.064 27.8736 124.95 21.7818 118.521 16.7579C112.097 11.7387 104.851 7.93783 96.7876 5.35432C88.8907 2.77189 80.7468 1.48076 72.3579 1.48076H2H1.48076V2V153.67V154.19H2H47.843H48.3622V153.67V109.682C51.8347 111.35 55.871 112.748 60.4666 113.88L60.474 113.882L60.4814 113.883C65.4276 114.949 71.022 115.48 77.2609 115.48C87.9579 115.48 98.0834 113.276 107.632 108.867C117.191 104.453 124.945 98.0569 130.882 89.6805ZM50.7417 80.9846C49.8231 81.8209 48.9808 82.8249 48.3622 83.9078V42.1346H66.9647C74.0886 42.1346 79.9541 43.555 84.5918 46.3608L84.6003 46.3659L84.6089 46.3707C89.3269 48.9846 91.6958 53.2498 91.6958 59.2725C91.6958 64.5253 89.3342 69.2194 84.5216 73.3671C79.8903 77.3485 74.0511 79.3533 66.9647 79.3533C63.399 79.3533 59.9994 79.054 56.7649 78.4568C55.8431 78.2784 54.7902 78.5066 53.769 78.9591C52.7373 79.4163 51.6851 80.1256 50.7417 80.9846ZM231.352 37.7005H230.833V38.2198V47.6364C226.831 43.8954 221.838 40.8256 215.864 38.4201C209.592 35.6781 203.15 34.3049 196.541 34.3049C186.322 34.3049 176.838 36.741 168.097 41.6138C159.51 46.3414 152.58 53.2785 147.307 62.4084L147.303 62.4146C142.184 71.5641 139.637 82.6731 139.637 95.7187C139.637 109.663 142.181 121.301 147.301 130.604L147.301 130.604L147.307 130.614C152.578 139.741 159.346 146.531 167.613 150.959C175.861 155.376 184.689 157.585 194.089 157.585C203.166 157.585 210.954 155.374 217.427 150.929C223.229 146.946 227.702 142.149 230.833 136.54V153.67V154.19H231.352H273.518H274.037V153.67V38.2198V37.7005H273.518H231.352ZM226.383 81.5925L226.365 81.5916L226.347 81.592C224.199 81.6353 222.667 82.316 221.679 83.5026C220.704 84.6726 220.326 86.2532 220.3 87.9631C220.248 91.3733 221.593 95.5744 222.953 98.9423C224.493 102.754 224.403 107.15 221.975 110.444C220.61 112.296 219.152 113.872 217.406 114.715C213.707 116.348 210.103 117.158 206.592 117.158C200.011 117.158 194.759 115.088 190.786 110.978C186.799 106.854 184.803 101.779 184.803 95.7187C184.803 89.6535 186.721 84.4193 190.556 79.9904C194.544 75.5734 199.469 73.3742 205.366 73.3742C210.038 73.3742 214.547 74.2663 218.898 76.0518L218.904 76.0543C222.853 77.6172 226.429 79.5183 229.634 81.7562L226.383 81.5925ZM325.855 38.0061L325.717 37.7005H325.382H276.842H276.002L276.378 38.4519L328.956 143.684L289.638 207.728L289.152 208.519H290.08H337.149H337.444L337.595 208.266L425.28 61.2136L425.878 60.2108L424.733 60.4384L375.827 70.1574L375.64 70.1947L375.521 70.3447L353.206 98.5754L325.855 38.0061ZM549.125 38.2198V37.7005H548.605H506.44H505.923L505.92 38.2176L505.675 97.0748V97.0769C505.675 104.884 504.289 110.479 501.615 113.965L501.61 113.971L501.606 113.977C499.123 117.416 494.902 119.195 488.789 119.195C482.681 119.195 478.37 117.419 475.722 113.971C473.207 110.482 471.902 104.884 471.902 97.0769V97.0576L471.901 97.0383L469.928 70.628L469.9 70.246L469.527 70.1605L427.048 60.4415L426.384 60.2895L426.414 60.9704L428.453 107.502C428.455 117.997 431.011 127.004 436.144 134.496L436.148 134.502C441.437 141.981 448.624 147.698 457.692 151.656C466.757 155.613 477.126 157.585 488.789 157.585C500.451 157.585 510.82 155.613 519.885 151.656C528.953 147.698 536.06 141.981 541.186 134.5C546.486 127.005 549.125 117.993 549.125 107.49V38.2198ZM671.813 150.503L671.815 150.502C680.564 145.624 687.495 138.613 692.606 129.48C697.891 120.329 700.519 109.219 700.519 96.1714C700.519 82.0775 697.976 70.4377 692.853 61.2827C687.744 52.1504 680.974 45.359 672.543 40.9309C664.295 36.514 655.468 34.3049 646.067 34.3049C636.991 34.3049 629.203 36.5158 622.729 40.961C616.927 44.9446 612.455 49.7409 609.323 55.3506V38.2198V37.7005H608.804H566.639H566.119V38.2198V208V208.519H566.639H608.804H609.323V208V144.256C613.311 148.003 618.22 151.147 624.041 153.693L624.048 153.696L624.055 153.699C630.487 156.288 637.008 157.585 643.615 157.585C653.832 157.585 663.234 155.226 671.813 150.503ZM622.742 77.4047L622.75 77.4011C626.622 75.6137 630.224 74.7324 633.564 74.7324C640.146 74.7324 645.397 76.8026 649.371 80.9126C653.358 85.0359 655.354 90.1107 655.354 96.1714C655.354 102.083 653.438 107.321 649.595 111.906C645.776 116.314 640.855 118.516 634.79 118.516C630.301 118.516 625.807 117.631 621.304 115.856C619.144 114.417 617.255 114.189 615.644 114.779C614.056 115.36 612.851 116.695 611.958 118.134C611.266 119.249 610.738 120.464 610.35 121.532L609.323 98.4352C609.323 98.4312 609.323 98.4272 609.323 98.4231C609.325 92.9259 610.613 88.5219 613.141 85.1663C615.872 81.6069 619.073 79.0254 622.742 77.4047Z" fill="black" stroke="black" stroke-width="1.03848" />
                        </svg>
                    </Box>
                    <Divider h={['1px', '1px', '100%', '100%']} orientation='vertical' border={'1px solid black'} />
                    <Box
                        w={['100%', '100%', '50%', '50%']}
                        h={'full'}
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        gap={['24px', '24px', '24px', '140px']}
                        px={['24px', '24px', '24px', '64px']}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'16px'}
                            w={'50%'}
                        >
                            <Popover
                                initialFocusRef={initialFocusRef}
                                placement='bottom'
                                closeOnBlur={false}
                            >
                                <PopoverTrigger>
                                    <Text _hover={{ cursor: 'pointer' }}>Legal</Text>
                                </PopoverTrigger>
                                <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                                    <PopoverHeader pt={4} fontWeight='bold' border='0'>
                                        Manage Your Channels
                                    </PopoverHeader>
                                    <PopoverArrow bg='blue.800' />
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore.
                                    </PopoverBody>
                                    <PopoverFooter
                                        border='0'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='space-between'
                                        pb={4}
                                    >
                                        <Box fontSize='sm'>Step 2 of 4</Box>
                                        <ButtonGroup size='sm'>
                                            <Button colorScheme='green'>Setup Email</Button>
                                            <Button colorScheme='blue' ref={initialFocusRef}>
                                                Next
                                            </Button>
                                        </ButtonGroup>
                                    </PopoverFooter>
                                </PopoverContent>
                            </Popover>
                            <Text>Cookie policy</Text>
                            <Text>Privacy policy</Text>
                        </Box>

                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            gap={'16px'}
                            w={'50%'}
                        >
                            <Text>Address</Text>
                            <Text w={'248px'} maxW={'100%'}>PU Office 17, Ikoyi rd , Off Rf gardens Lagos Island.</Text>
                            <Text>{" "}</Text>
                        </Box>




                    </Box>
                </Box>
            </Box>
        </Box>
    );
}