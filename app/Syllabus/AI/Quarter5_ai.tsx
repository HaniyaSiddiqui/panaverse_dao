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

export default function Quarter5_ai() {
    return (


        <Box p={4}>

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
                        <Text w={'full'} color={'blue.500'} as={'span'}>
                            Artificial Intelligence (AI) and Deep Learning Specialization
                        </Text>
                    </Text>

                </Heading>
                <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                    AI-361: Deep Learning and MLOps

                </Text>
                <Heading fontSize={'3xl'}>Course Description</Heading>
                <Text textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                    This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible cost while delivering the highest possible performance.
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
                                    Deep Learning with Tensorflow


                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}> Deep Learning with Python, Second Edition 2nd Edition


                                        </Text>
                                    </NextLink>
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
                                    Machine Learning Engineering for Production (MLOps) using Terraform for CDK

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>

                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'blue.400'} fontWeight={500}> A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)

                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'blue.400'} fontWeight={500}>MLOps leveraging AWS SageMaker and Terraform
                                            MLOps leveraging AWS SageMaker and Terraform
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


