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
} from '@chakra-ui/react'

import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'

import NextLink from 'next/link'
import { LinkIcon, CheckIcon, ArrowRightIcon, MinusIcon } from '@chakra-ui/icons';

export default function Quarter5_iot() {
    return (
        <Box>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>


                <Heading fontSize={'5xl'} color={'pink.900'}>QUARTER V</Heading>
                <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                    Duration: 13 Weeks
                </Text>
                <Heading textAlign={'center'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    <Text
                        as={'span'}
                        position={'relative'}
                        _after={{
                            content: "''",

                            width: 'full',

                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            color: 'pink.500',
                            bg: 'blue.900',
                            zIndex: -1,
                        }}>
                        <Text w={'full'} color={'blue.500'} as={'span'}> Ambient Computing and IoT Specialization</Text>
                    </Text>

                </Heading>
                <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                    AC-361: Embedded Programming using C and Rust

                </Text>
                <Heading fontSize={'3xl'}>Course Description</Heading>
                <Text textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                    This is an introductory course about using the C and Rust Programming Languages on &quot;Bare Metal&quot; embedded systems, such as Microcontrollers. We will start by introducing embedded systems and move on to learn the  C++ and Rust programming languages. We&apos;ll learn about basic programming concepts using C and Rust, then we will explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.
                </Text>

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
                                    Introduction to the IOT and Embedded Systems

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar ing ' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Introduction to the Internet of Things and Embedded Systems
                                        </Text>
                                    </NextLink>


                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        What is the Fourth Industrial Revolution?
                                    </Text>

                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        What is IoT?
                                    </Text>

                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        Embedded Systems

                                    </Text>

                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        Hardware and Software for IoT
                                    </Text>


                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        Edge and Cloud Computing


                                    </Text>

                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        The future of IoT is AI

                                    </Text>

                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        Blockchain in the Internet of Things?


                                    </Text>


                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        IoT + AI + Blockchain: The Fourth Industrial Revolution has begun


                                    </Text>

                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        How will Matter change the IoT Infrastructure and address issues
                                        Metaverse and IoT


                                    </Text>
                                </Stack>
                            </HStack>



                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week 3

                                    </Text>

                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        Total Questions: 46, Total Time: 60 minutes

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
                                    The C Reference Book: The C programming language


                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Embedded Programming book: Internet of things with ESP8266

                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>


                        </AccordionPanel>
                    </AccordionItem>

                    {/* ************    3  ************ */}

                    <AccordionItem m={2}>
                        <h2>
                            <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                _hover={{
                                    bgGradient: 'linear(to-r, pink.500, blue.900)',
                                }} borderRadius={'25px'}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Introduction to C Part 1 (Weeks 3B, 4, and 5)


                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        C environment Setup for (Windows, Linux, and Mac OS systems)
                                        Chapters 1-2 of  “The C programming language”

                                        <UnorderedList>
                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Variable names types

                                                </Text>

                                            </ListItem>

                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Data types and sizes


                                                </Text>

                                            </ListItem>

                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Constants

                                                </Text>

                                            </ListItem>

                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Arithmetic operations

                                                </Text>

                                            </ListItem>


                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Type conversions.


                                                </Text>

                                            </ListItem>

                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Bitwise operators


                                                </Text>

                                            </ListItem>

                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Conditional expressions.



                                                </Text>

                                            </ListItem>
                                        </UnorderedList>

                                    </Text>

                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        Programming Assignments will also be given.

                                    </Text>

                                </Stack>
                            </HStack>


                        </AccordionPanel>
                    </AccordionItem>

                    {/* ************    4  ************ */}

                    <AccordionItem m={2}>
                        <h2>
                            <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                _hover={{
                                    bgGradient: 'linear(to-r, pink.500, blue.900)',
                                }} borderRadius={'25px'}>
                                <Box as="span" flex='1' textAlign='left'>
                                    C Programming Part 2 (Weeks 6 and 7)


                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Topics 3 and 4  of  “The C programming language”

                                        <UnorderedList>
                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Control flow statements (else if, loops, switch, break continue)
                                                </Text>
                                            </ListItem>

                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Function and Program structure(Returning and non-returning, scope rules, Recursion)
                                                </Text>
                                            </ListItem>
                                        </UnorderedList>

                                    </Text>

                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        Programming Assignments will also be given.

                                    </Text>

                                </Stack>
                            </HStack>


                        </AccordionPanel>
                    </AccordionItem>

                    {/* ************    5  ************ */}

                    <AccordionItem m={2}>
                        <h2>
                            <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                _hover={{
                                    bgGradient: 'linear(to-r, pink.500, blue.900)',
                                }} borderRadius={'25px'}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Introduction to Embedded systems Part 1 (Weeks 8)



                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Basic Electronics and Introduction to microcontrollers
                                        Chapter 1 of  “Internet of things with ESP8266”

                                        <UnorderedList>
                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Arduino IDE installation and env setup for ESP8266
                                                </Text>
                                            </ListItem>

                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Burning your first code on ESP8266
                                                </Text>
                                            </ListItem>
                                        </UnorderedList>

                                    </Text>

                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        Project-based Assignments will also be given

                                    </Text>

                                </Stack>
                            </HStack>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Mid-Term II: C Programming Quiz 1 in Week 9
                                    </Text>

                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        Total Questions: 62, Total Time: 75 minutes
                                    </Text>

                                </Stack>
                            </HStack>


                        </AccordionPanel>
                    </AccordionItem>


                    {/* ************* 6 *************** */}
                    <AccordionItem m={2}>
                        <h2>
                            <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                _hover={{
                                    bgGradient: 'linear(to-r, pink.500, blue.900)',
                                }}

                                borderRadius={'25'}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Introduction to Embedded systems Part 2 (Weeks 9-12)

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar ing ' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Chapters 2-5 of  “Internet of things with ESP8266”                                        </Text>
                                    </NextLink>



                                </Stack>
                            </HStack>
                        </AccordionPanel>
                    </AccordionItem>


                    {/* ************* 7 *************** */}
                    <AccordionItem m={2}>
                        <h2>
                            <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                _hover={{
                                    bgGradient: 'linear(to-r, pink.500, blue.900)',
                                }}

                                borderRadius={'25'}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Embedded Programming using Rust (Extra Weeks in the Course)


                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://www.rust-lang.org/what/embedded' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            https://www.rust-lang.org/what/embedded                                      </Text>
                                    </NextLink>



                                </Stack>
                            </HStack>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://crates.io/crates/esp8266' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            https://crates.io/crates/esp8266                                     </Text>
                                    </NextLink>



                                </Stack>
                            </HStack>
                        </AccordionPanel>
                    </AccordionItem>



                    {/* ************    8************ */}

                    <AccordionItem m={2}>
                        <h2>
                            <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                _hover={{
                                    bgGradient: 'linear(to-r, pink.500, blue.900)',
                                }} borderRadius={'25px'}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Hardware Requirements:



                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>


                                        <OrderedList>
                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Esp8266 (Node MCU)

                                                </Text>
                                            </ListItem>

                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Jumper Wires

                                                </Text>
                                            </ListItem>

                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Bread Board


                                                </Text>
                                            </ListItem>


                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    LEDs

                                                </Text>
                                            </ListItem>

                                            <ListItem>
                                                <Text align={'start'} color={'black.400'} fontWeight={500}>
                                                    Sensors: (Dht11, ultrasonic sensor, IR sensor)

                                                </Text>
                                            </ListItem>
                                        </OrderedList>

                                    </Text>



                                </Stack>
                            </HStack>



                        </AccordionPanel>
                    </AccordionItem>

                </Accordion >

            </Container >
        </Box>
    );
}


