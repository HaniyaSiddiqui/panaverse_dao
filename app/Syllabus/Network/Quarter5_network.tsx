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

export default function Quarter5_network() {
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
                            Network Programmability and Automation Specialization


                        </Text>
                    </Text>

                </Heading>
                <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                    NPA-361: Network Programmability and Automation


                </Text>
                <Heading fontSize={'3xl'}>Course Description</Heading>
                <Text textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                    Traditional network management techniques can&apos;t be effectively automated and don&apos;t scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.

                </Text>


                <Text textAlign={'left'} mt={4} color={'gray.600'} fontSize={'md'}>
                    Textbook:
                    <Link color={'blue.400'} href='https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3' >
                        https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3
                    </Link>
                </Text>



            </Stack>


        </Box >

    );
}


