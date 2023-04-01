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

import Quarter5_web from './Web3/Quarter5_web';
import Quarter5_ai from './AI/Quarter5_ai';
import Quarter5_cloud from './Cloud/Quarter5_cloud';
import Quarter5_iot from './Iot/Quarter5_iot';
import Quarter5_genomics from './Genomics/Quarter5_genomics';
import Quarter5_network from './Network/Quarter5_network';
import { ChakraProvider } from '@chakra-ui/react';

export default function Quarter5() {
    return (

        <ChakraProvider>
            <Box>
                <Quarter5_web />
                <Quarter5_ai />
                <Quarter5_cloud />
                <Quarter5_iot />
                <Quarter5_genomics />
                <Quarter5_network />
            </Box>

        </ChakraProvider>

    );
}


