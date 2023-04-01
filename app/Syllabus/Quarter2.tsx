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
import { LinkIcon, ArrowRightIcon } from '@chakra-ui/icons';

import { ChakraProvider } from '@chakra-ui/react';
export default function Quarter2() {
    return (
        <ChakraProvider>

            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>

                    <Heading fontSize={'5xl'} color={'pink.900'}>QUARTER II (Core)</Heading>
                    <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                        W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform <br />
                        Duration: 13 Weeks
                    </Text>
                    <Heading fontSize={'3xl'}>Course Description</Heading>
                    <Text textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                        The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF)
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
                                        Next.js 13 Web Development

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://beta.nextjs.org/docs' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Next 13 Official Documentation
                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://beta.reactjs.org/learn' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Latest Learn React Official Website
                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://github.com/panaverse/learn-nextjs' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Learn Next.js 13 Learning Repo
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
                                        Next.js 13 using Chakra UI (Remote Zoom Class)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.freecodecamp.org/news/css-flexbox-complete-guide/' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://chakra-ui.com/getting-started' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Chakra UI Docs




                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                            </AccordionPanel>
                        </AccordionItem>


                        {/* ************    3  ************ */}

                        <AccordionItem m={2}>
                            <h2>
                                <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                    _hover={{
                                        bgGradient: 'linear(to-r, pink.500, blue.900)',
                                    }} borderRadius={'25px'}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano


                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.figma.com/community/file/768809027799962739' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Figma Design Kit for TailwindCSS



                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>
                                {/* -------------------------------------------------------- */}


                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.figma.com/community/file/971408767069651759' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Chakra UI Figma Kit



                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>


                        {/* ************  4  ************ */}
                        <AccordionItem m={2}>
                            <h2>
                                <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                    _hover={{
                                        bgGradient: 'linear(to-r, pink.500, blue.900)',
                                    }}

                                    borderRadius={'25'}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        API Routes with Next.js (Remote Zoom Class)

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://nextjs.org/docs/api-routes/introduction' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                API Routes
                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                            </AccordionPanel>
                        </AccordionItem>



                        {/* ************  5  ************ */}
                        <AccordionItem m={2}>
                            <h2>
                                <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                    _hover={{
                                        bgGradient: 'linear(to-r, pink.500, blue.900)',
                                    }}

                                    borderRadius={'25'}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        APIs with Next.js and tRPC (Remote Zoom Class)

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Build a tRPC CRUD API Example with Next.js

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* ------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Stop building REST APIs for your Next.js apps, use tRPC instead


                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                            </AccordionPanel>
                        </AccordionItem>



                        {/* ************** 6 ***************** */}

                        <AccordionItem m={2}>
                            <h2>
                                <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                    _hover={{
                                        bgGradient: 'linear(to-r, pink.500, blue.900)',
                                    }}

                                    borderRadius={'25'}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        SQL and Prisma


                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Start from scratch with relational databases

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* ------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.youtube.com/watch?v=5hzZtqCNQKk' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                SQL For Beginners Video Tutorial



                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                                {/* ------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.freecodecamp.org/news/dbms-and-sql-basics/' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Database Management Systems and SQL – Tutorial for Beginners



                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                            </AccordionPanel>
                        </AccordionItem>


                        {/* ************ 7  ************ */}
                        <AccordionItem m={2}>
                            <h2>
                                <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                    _hover={{
                                        bgGradient: 'linear(to-r, pink.500, blue.900)',
                                    }}

                                    borderRadius={'25'}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Next.js 13 using TailwindCSS (Remote Zoom Class)

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Modern CSS with Tailwind, Second Edition by Noel Rappin

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                            </AccordionPanel>
                        </AccordionItem>


                        {/* ************** 8 ***************** */}

                        <AccordionItem m={2}>
                            <h2>
                                <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                    _hover={{
                                        bgGradient: 'linear(to-r, pink.500, blue.900)',
                                    }}

                                    borderRadius={'25'}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        AWS Application Composer (Remote Zoom Class)



                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.youtube.com/watch?v=BujE_tik5r8' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>

                                                What is AWS Application Composer?


                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* ------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.youtube.com/watch?v=p411uh363jQ' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Event-driven apps with AWS Application Composer




                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                                {/* ------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://aws.amazon.com/application-composer/' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Visually design and build serverless applications quickly
                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                                {/* ------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={800}>
                                            Must Have: Create Free AWS Account

                                        </Text>

                                        <Text align={'start'} color={'black.400'} fontWeight={500}>
                                            AWS Free Tier
                                            {' '}
                                            <Text as={'span'} >
                                                <Link target="_blank" _hover={{
                                                    color: 'blue.400',
                                                }} href='https://aws.amazon.com/application-composer/' >
                                                    https://aws.amazon.com/application-composer/
                                                </Link>

                                            </Text>

                                            <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                                Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.



                                            </Text>
                                            <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                                Now you can create a virtual VISA Debit card through the NayaPay app (https://www.nayapay.com/ ) which can be used to create AWS/GCP/Azure accounts. This is good news for those students who find it difficult to create physical debit and credit cards from banks.


                                            </Text>

                                            <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                                You can also get a $300 credit
                                                {' '}
                                                <Text as={'span'} >
                                                    <Link target="_blank" _hover={{
                                                        color: 'blue.400',
                                                    }} href='https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html' >
                                                        https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html
                                                    </Link>

                                                </Text>
                                            </Text>

                                        </Text>

                                    </Stack>
                                </HStack>


                            </AccordionPanel>
                        </AccordionItem>


                        {/* ************ 9 ************ */}
                        <AccordionItem m={2}>
                            <h2>
                                <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                    _hover={{
                                        bgGradient: 'linear(to-r, pink.500, blue.900)',
                                    }}

                                    borderRadius={'25'}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://github.com/panaverse/learn-multicloud-api-development' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                </Container>
            </Box>

            {/* Projects Details */}
            <Box p={4} >
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>



                    <Heading fontSize={'3xl'}>Web 2.0 Projects</Heading>

                    <OrderedList textAlign={'left'}>
                        <ListItem>Next.js Projects

                            {' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}>
                                <Link target="_blank" href='https://github.com/panaverse/nextjs-projects' />
                                https://github.com/panaverse/nextjs-projects</Text>

                        </ListItem>


                        <ListItem>Styling Next.js Projects using TailwindCSS and Chakra UI
                            {' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}>
                                <Link target="_blank" href='https://github.com/panaverse/styling-nextjs-projects' />
                                https://github.com/panaverse/styling-nextjs-projects</Text>

                        </ListItem>


                        <ListItem>Todo Full-Stack App
                            {' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}>
                                <Link target="_blank" href='https://github.com/ogzhanolguncu/min-todo' />
                                https://github.com/ogzhanolguncu/min-todo</Text>
                        </ListItem>


                        <ListItem>Build a Twitter Clone
                            {' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}>
                                <Link target="_blank" href='https://www.youtube.com/watch?v=nzJsYJPCc80' />
                                https://www.youtube.com/watch?v=nzJsYJPCc80</Text>

                        </ListItem>
                    </OrderedList>
                </Stack>

            </Box>
        </ChakraProvider>

    );
}


