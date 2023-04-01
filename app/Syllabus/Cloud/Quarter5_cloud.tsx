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

export default function Quarter5_cloud() {
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
                        <Text w={'full'} color={'blue.500'} as={'span'}> Cloud-Native Computing Specialization</Text>
                    </Text>

                </Heading>
                <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                    CN-361: Developing Multi-Cloud Apps using CDK for Terraform


                </Text>
                <Heading fontSize={'3xl'}>Course Description</Heading>
                <Text textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                    Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale, multi-cloud infrastructures.
                </Text>

                <Text mt={2} textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                    Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency management, etc.
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
                                    CDK for Terraform

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://developer.hashicorp.com/terraform/cdktf' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            CDK for Terraform
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


