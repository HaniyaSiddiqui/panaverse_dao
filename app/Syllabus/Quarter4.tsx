"use client";
import React from 'react';
import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Link,
    HStack, useBreakpointValue,
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

import Quarter4_web from './Web3/Quarter4_web';
import Quarter4_ai from './AI/Quarter4_ai';
import Quarter4_cloud from './Cloud/Quarter4_cloud';
import Quarter4_iot from './Iot/Quarter4_iot';
import Quarter4_genomics from './Genomics/Quarter4_genomics';
import Quarter4_network from './Network/Quarter4_network';
import { ChakraProvider } from '@chakra-ui/react';

export default function Quarter4() {
    return (
        <ChakraProvider>
            <Box>
                <Quarter4_web />
                <Quarter4_ai />
                <Quarter4_cloud />
                <Quarter4_iot />
                <Quarter4_genomics />
                <Quarter4_network />
            </Box>

        </ChakraProvider >

    );
}


