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

export default function Quarter4_ai() {
    return (
        <Box p={4}>




            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>

                <Heading fontSize={'5xl'} color={'pink.900'}>QUARTER IV</Heading>
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
                        <Text w={'full'} color={'blue.500'} as={'span'}>
                            Artificial Intelligence (AI) and Deep Learning Specialization
                        </Text>
                    </Text>

                </Heading>
                <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                    AI-351: Developing Planet-Scale Intelligent APIs and Python Programming


                </Text>
                <Heading fontSize={'3xl'}>Course Description</Heading>
                <Text textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                    Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep learning&apos;s potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.
                </Text>


                <Text textAlign={'left'} mt={2} color={'gray.600'} fontSize={'xl'}>
                    We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and Next.js 13.
                </Text>


                <Text textAlign={'left'} mt={2} color={'gray.600'} fontSize={'xl'}>
                    We&apos;ll conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing clean and readable code with exercises for each topic. We&apos;ll also learn how to make your programs interactive and how to test your code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services.
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
                                }} borderRadius={'25px'}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Introduction to Machine Learning, Data Science, and AI

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://www.coursera.org/learn/ai-for-everyone' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}> AI for Everyone

                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        AI for Everyone Quiz in Week 3</Text>

                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Total Questions: 60, Total Time: 75 minutes</Text>
                                </Stack>
                            </HStack>

                        </AccordionPanel>



                    </AccordionItem>


                    {/* ************  2  ************ */}

                    <AccordionItem m={2}>
                        <h2>
                            <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                _hover={{
                                    bgGradient: 'linear(to-r, pink.500, blue.900)',
                                }} borderRadius={'25px'}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models
                                    We will cover GPT-4, ChatGPT, etc. and Next.js 13

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://openai.com/api/ ' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'blue.400'} fontWeight={500}> https://openai.com/api/

                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'blue.400'} fontWeight={500}> https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>

                        </AccordionPanel>



                    </AccordionItem>


                    {/* ************  3  ************ */}
                    <AccordionItem m={2}>
                        <h2>
                            <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                _hover={{
                                    bgGradient: 'linear(to-r, pink.500, blue.900)',
                                }} borderRadius={'25px'}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Python Crash Course  for TypeScript Developers

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition                                        </Text>


                                    <Text as={'span'} color={'blue.400'} _hover={{
                                        color: 'pink.400',
                                    }}> <Link href='https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5'> https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5                    </Link>



                                    </Text>

                                </Stack>
                            </HStack>



                        </AccordionPanel>



                    </AccordionItem>





                </Accordion >

            </Container >
        </Box >

    );
}


