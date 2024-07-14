'use client'

import { Box, Text } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react';
  import { MinusIcon, AddIcon } from '@chakra-ui/icons'

export default function FAQ() {
    return (
        <Box
            w={'full'}
            h={'100vh'}
            px={['25px', '25px', '150px', '150px']}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
        >
            <Text fontWeight={600} fontSize={['40px', '40px', '64px', '64px']}>FAQs</Text>
            <Accordion w={'full'} allowMultiple>
                <AccordionItem borderBottom={'1px black'} borderTop={'1px solid black'} py={'16px'}>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' fontSize={['12px', '12px', '16px', '16px']}>
                                        What is Payup?
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem borderBottom={'1px black'} borderTop={'1px solid black'} py={'16px'}>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' fontSize={['12px', '12px', '16px', '16px']}>
                                    What does Contactless payment mean?
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem borderBottom={'1px black'} borderTop={'1px solid black'} py={'16px'}>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' fontSize={['12px', '12px', '16px', '16px']}>
                                    How do you deposit money on Payup
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem borderBottom={'1px black'} borderTop={'1px solid black'} py={'16px'}>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' fontSize={['12px', '12px', '16px', '16px']}>
                                    How do you pay your bills?
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>

                <AccordionItem borderBottom={'1px solid black'} borderTop={'1px solid black'} py={'16px'}>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left' fontSize={['12px', '12px', '16px', '16px']}>
                                    Where can i find my account information?
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon fontSize='12px' />
                                    ) : (
                                        <AddIcon fontSize='12px' />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            The account information of an existing  Payup customer exists on the Account card on the dashboard screen, the user has access to bank account number and details given to him by Payup. 
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>
        </Box>
    );
}