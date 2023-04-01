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

export default function Quarter4_cloud() {
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
                        <Text w={'full'} color={'blue.500'} as={'span'}> Cloud-Native Computing Specialization</Text>
                    </Text>

                </Heading>
                <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                    CN-351: Certified Kubernetes Application Developer (CKAD)

                </Text>
                <Heading fontSize={'3xl'}>Course Description</Heading>
                <Text textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                    Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.
                </Text>

                <Text mt={2} textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                    These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make high-impact changes frequently and predictably with minimal toil.
                </Text>


                <Text mt={2} textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                    Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes.
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
                                    Kubernetes: Up and Running
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition
                                        </Text>
                                    </NextLink>
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
                                    Cloud Development
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://cdk8s.io/' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>

                                            Cloud Development Kit for Kubernetes

                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>



                        </AccordionPanel>
                    </AccordionItem>



                </Accordion >

            </Container >
        </Box >

    );
}


