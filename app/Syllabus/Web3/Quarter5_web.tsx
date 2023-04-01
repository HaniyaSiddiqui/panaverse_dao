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

export default function Quarter5_web() {
    return (
        <Box>
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
                                Web 3 and Metaverse Specialization
                            </Text>
                        </Text>

                    </Heading>

                    <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                        MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences

                    </Text>
                    <Heading fontSize={'3xl'}>Course Description</Heading>
                    <Text textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                        The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and nations. It's unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU technologies.

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
                                        Open Metaverse Web Development
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>

                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://github.com/panaverse/metaverse-web' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Open Metaverse Learning Repo

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
                                        Build QraphQL APIs
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>

                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}>
                                            Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
                                        </Text>


                                    </Stack>
                                </HStack>

                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.blender.org/download/' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Blender 3.3+ Download

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Blender 3.0 Beginner Tutorial

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://docs.google.com/document/d/1zPBgZAdftWa6WVa7UIFUqW_7EcqOYE0X743RqFuJL3o/edit' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Blender 3.0 Hotkey

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Blender Projects Textbook: Blender by Example 2nd Edition

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>



                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain
                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.youtube.com/watch?v=H7T0SzdFHwg' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Best Hardware Performance for Blender Rendering  </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                            </AccordionPanel>
                        </AccordionItem>


                    </Accordion>

                </Container>
            </Box>


            {/* Projects Details */}
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>



                    <Heading fontSize={'3xl'}>Assignments</Heading>

                    <OrderedList textAlign={'left'}>
                        <ListItem>Build a 3D Donut using Blender 3 as shown in these video tutorials

                            {' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}>
                                <Link target="_blank" href='https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD ' />
                                https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD </Text>

                        </ListItem>


                        <ListItem>Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book [Blender by Example 2nd Edition
                            {' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}>
                                <Link target="_blank" href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 ' />
                                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 </Text>

                        </ListItem>


                        <ListItem>Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition
                            {' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}>
                                <Link target="_blank" href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 ' />
                                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 </Text>
                        </ListItem>


                        <ListItem>Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition
                            {' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}>
                                <Link target="_blank" href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561 ' />
                                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                            </Text>

                        </ListItem>


                        <ListItem>Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition{' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}>
                            <Link target="_blank" href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' />
                            https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561</Text>
                        </ListItem>


                        <ListItem>Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials {' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}>
                            <Link target="_blank" href='https://www.youtube.com/watch?v=bpvh-9H8S1g' />
                            https://www.youtube.com/watch?v=bpvh-9H8S1g</Text>

                        </ListItem>
                    </OrderedList>
                </Stack>

            </Box>

        </Box>
    );
}


