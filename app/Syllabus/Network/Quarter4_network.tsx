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

import NextLink from 'next/link';
import { LinkIcon, CheckIcon, ArrowRightIcon, MinusIcon } from '@chakra-ui/icons';

export default function Quarter4_network() {
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
                            Network Programmability and Automation Specialization
                        </Text>
                    </Text>

                </Heading>
                <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                    NPA-351: CCNA 200-301 Certification


                </Text>
                <Heading fontSize={'3xl'}>Course Description</Heading>
                <Text textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                    This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT                </Text>


                <Text textAlign={'left'} mt={4} color={'gray.600'} fontSize={'md'}>
                    Textbook: <Link color={'blue.400'} href='https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1' >
                        https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1</Link>
                </Text>



            </Stack>


        </Box >

    );
}


