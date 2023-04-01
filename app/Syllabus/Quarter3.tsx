"use client";
import React from 'react';
import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Link,
    HStack,
    Icon
} from '@chakra-ui/react';


import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';

import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

import NextLink from 'next/link';
import { LinkIcon, CheckIcon, ArrowRightIcon, MinusIcon } from '@chakra-ui/icons';

export default function Quarter3() {
    return (
        <ChakraProvider>
            <Box>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>

                    <Heading fontSize={'5xl'} color={'pink.900'}>QUARTER III (Core)</Heading>
                    <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                        $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development <br />
                        Duration: 13 Weeks
                    </Text>
                    <Heading fontSize={'3xl'}>EARN WHILE YOU LEARN</Heading>

                </Stack>

                <Container maxW={'3xl'} mt={10}>
                    <Accordion >
                        {/* ************  1  ************ */}
                        <AccordionItem m={2}>
                            <h2>
                                <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                    _hover={{
                                        bgGradient: 'linear(to-r, pink.500, blue.900)',
                                    }}

                                    borderRadius={'25'}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Build Full-Stack Next.js 13 Jamstack Templates
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}>
                                            You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.
                                        </Text>

                                        <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                            The Template Standard

                                            {' '}
                                            <Text as={'span'} color={'blue.400'} _hover={{
                                                color: 'pink.400',
                                            }}> <Link href='https://github.com/panaverse/panaverse-template-standard'> https://github.com/panaverse/panaverse-template-standard                         </Link>

                                            </Text>

                                        </Text>

                                    </Stack>
                                </HStack>




                            </AccordionPanel>
                        </AccordionItem>


                        {/* ************    2  ************ */}

                        <AccordionItem m={2}>
                            <h2>
                                <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                    _hover={{
                                        bgGradient: 'linear(to-r, pink.500, blue.900)',
                                    }} borderRadius={'25px'}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Build QraphQL APIs
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>

                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}>
                                            You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.
                                        </Text>
                                    </Stack>
                                </HStack>

                            </AccordionPanel>
                        </AccordionItem>


                    </Accordion>

                </Container>
            </Box>
        </ChakraProvider>

    );
}


