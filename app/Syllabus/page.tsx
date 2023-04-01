"use client";
import React from 'react';

import {
  Box,
  Stack,
  Heading,
  Container,

} from '@chakra-ui/react';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Quarter1 from './Quarter1';
import Quarter2 from './Quarter2';
import Quarter3 from './Quarter3';
import Quarter5 from './Quarter5';
import Quarter4 from './Quarter4';
import { ChakraProvider, Flex } from '@chakra-ui/react';


export default function Syllabus() {
  return (
    <ChakraProvider>

      <Header />
      <Stack
        maxW={'full'}
        px={{ lg: 20 }}
        overflow={'hidden'}>
        <Box
          height={'2xl'}
          objectFit={'cover'}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage={`url('./home/rm251-aum-13-g.jpg')`}>
          {/* This is the block you need to change, to customize the caption */}
          <Container textAlign={'center'} size="container.lg" height="600px" mt={{ lg: '-20px' }} position="relative">
            <Stack
              spacing={6}
              w={'full'}
              maxW={'lg'}
              position="absolute"
              top="50%"
              transform="translate(0, -50%)">
              <Heading textAlign={'center'} color={'gray.100'} fontSize={{
                base: '5xl', md: '5xl', lg: '5xl'
              }}>
                Detailed Course Syllabus
              </Heading>
            </Stack>
          </Container>
        </Box>

        <Tabs isFitted variant='enclosed'>

          <TabList mb='1em'  >
            <Tab _selected={{ color: 'white', bg: 'pink.900' }} fontSize={'2xl'} >Quater I (Core)</Tab>
            <Tab _selected={{ color: 'white', bg: 'pink.900' }} fontSize={'2xl'} >Quater II (Core)</Tab>
            <Tab _selected={{ color: 'white', bg: 'pink.900' }} fontSize={'2xl'} >Quater III (Core)</Tab>
            <Tab _selected={{ color: 'white', bg: 'pink.900' }} fontSize={'2xl'} >Quater IV </Tab>
            <Tab _selected={{ color: 'white', bg: 'pink.900' }} fontSize={'2xl'} >Quater V </Tab>
          </TabList>

          <TabPanels>
            {/* Quarter 1 */}
            <TabPanel >
              <><Quarter1 /></>
            </TabPanel>

            {/* Quarter 2 */}
            <TabPanel>
              <> <Quarter2 /></>
            </TabPanel>

            {/* Quarter 3 */}

            <TabPanel>
              <> <Quarter3 /></>
            </TabPanel>

            {/* Quarter 4 */}
            <TabPanel>
              <> <Quarter4 /></>
            </TabPanel>

            {/* Quarter 5 */}
            <TabPanel>
              <> <Quarter5 /></>
            </TabPanel>
          </TabPanels>
        </Tabs>

      </Stack>

      {/* Add Footer */}
      < Footer />

    </ChakraProvider >
  );
}


