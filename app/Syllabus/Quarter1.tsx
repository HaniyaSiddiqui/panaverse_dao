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

import { ChakraProvider } from '@chakra-ui/react';

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

export default function Quarter1() {

    return (
        <ChakraProvider>
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>

                    <Heading fontSize={'5xl'} color={'pink.900'}>QUARTER I (Core)</Heading>
                    <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                        CS-101: Object-Oriented Programming using TypeScript <br />
                        Duration: 13 Weeks
                    </Text>
                    <Heading fontSize={'3xl'}>Course Description</Heading>
                    <Text textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                        We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.

                    </Text>
                </Stack>

                <Container maxW={'3xl'} mt={10}>
                    <Accordion >
                        {/* ************  1  ************ */}
                        <AccordionItem m={2} >
                            <h2>
                                <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                    _hover={{
                                        bgGradient: 'linear(to-r, pink.500, blue.900)',
                                    }}

                                    borderRadius={'25'}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        HTML and CSS (Homework)
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>    Learn HTML by Hira Khan (Watch Recorded Videos)

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Learn CSS Intro by Hira Khan (Watch Recorded Videos)

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
                                        Web 3.0 and Metaverse Theory
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Introduction to Panaverse DAO


                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Web 3.0 User Guide



                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>
                                {/* -------------------------------------------------------- */}

                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}> Complete Web 3 Assignments included in the Web 3 User Guide</Text>


                                    </Stack>
                                </HStack>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>

                                        <NextLink target="_blank" href='https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing ' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>
                                                Virtual and Augmented  Metaverse User Guide
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
                                        Fundamentals of Typescript
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>TypeScript Presentation


                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Getting Started Exercises with TypeScript and Node.js



                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>
                                {/* -------------------------------------------------------- */}

                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}> Fundamentals of JavaScript and Node.js Quiz</Text>


                                    </Stack>
                                </HStack>
                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} pl={14} spacing={5} mb={2}>

                                    <Stack align={'start'}>

                                        <Text align={'start'} color={'black.400'} fontWeight={500}>
                                            Topics Covered in the Quiz:
                                        </Text>
                                        <OrderedList>
                                            <ListItem>Background of JavaScript and How to use JavaScript in Browser</ListItem>
                                            <ListItem>Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)</ListItem>
                                            <ListItem>Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm:
                                                <br /> <NextLink target="_blank" href='https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing  ' passHref>
                                                    <Text align={'start'} _hover={{
                                                        color: 'blue.400',
                                                    }} as={"span"} color={'blue.400'} >https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                                                    </Text>  </NextLink>


                                            </ListItem>
                                            <ListItem>How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs:
                                                <br /> <NextLink target="_blank" href='https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md' passHref>
                                                    <Text align={'start'} _hover={{
                                                        color: 'blue.400',
                                                    }} as={"span"} color={'blue.400'} >https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                                                    </Text>  </NextLink><br /> Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn.
                                            </ListItem>

                                            <ListItem>Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)
                                            </ListItem>

                                            <ListItem>Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)
                                            </ListItem>

                                            <ListItem>Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)</ListItem>

                                            <ListItem>Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)
                                            </ListItem>

                                            <ListItem>Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)
                                            </ListItem>

                                            <ListItem>JavaScript promises, mastering the asynchronous
                                                <br /> <NextLink target="_blank" href='https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript  ' passHref>
                                                    <Text align={'start'} _hover={{
                                                        color: 'blue.400',
                                                    }} as={"span"} color={'blue.400'} >https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript
                                                    </Text>  </NextLink>
                                            </ListItem>

                                            <ListItem>New JavaScript Features in ECMAScript 2022 and 2021
                                                <br /> <NextLink target="_blank" href='https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg' passHref>
                                                    <Text align={'start'} _hover={{
                                                        color: 'blue.400',
                                                    }} as={"span"} color={'blue.400'} >https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg
                                                    </Text>  </NextLink>
                                            </ListItem>

                                        </OrderedList>



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
                                        Object-Oriented Programming with TypeScript
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>    Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://github.com/panaverse/learn-typescript' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Learning Repository


                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.learningtypescript.com/' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>In Class Companion projects and articles for Learning TypeScript



                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://github.com/panaverse/typescript-node-projects' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Homework Project


                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}> Fundamentals of TypeScript Quiz</Text>
                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}> TypeScript Professional Proficiency Quiz</Text>
                                    </Stack>
                                </HStack>

                            </AccordionPanel>
                        </AccordionItem>


                        {/* ************ 5  ************ */}
                        <AccordionItem m={2}>
                            <h2>
                                <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                    _hover={{
                                        bgGradient: 'linear(to-r, pink.500, blue.900)',
                                    }}

                                    borderRadius={'25'}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        TypeScript for React
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://profy.dev/article/react-typescript' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>  Minimal TypeScript Crash Course For React
                                                With Interactive Code Exercises

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                </Container>
            </Box>

            {/* Quizes Details */}
            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>



                    <Heading fontSize={'3xl'}>Quarter Break Assignments and Quizzes</Heading>
                    <Text color={'gray.600'} fontSize={'xl'}>
                        During the Quarter Break, we do the following Assignments:
                    </Text>

                    <OrderedList textAlign={'left'}>
                        <ListItem>

                            <NextLink target="_blank" href='https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge' passHref>
                                <Text align={'start'} _hover={{
                                    color: 'pink.400',
                                }} color={'blue.400'} fontWeight={500}>   https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge
                                </Text>
                            </NextLink>
                        </ListItem>
                        <ListItem>
                            <NextLink target="_blank" href='https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app' passHref>
                                <Text align={'start'} _hover={{
                                    color: 'pink.400',
                                }} color={'blue.400'} fontWeight={500}>  https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app
                                </Text>
                            </NextLink>


                        </ListItem>

                        <ListItem>
                            <NextLink target="_blank" href='https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui' passHref>
                                <Text align={'start'} _hover={{
                                    color: 'pink.400',
                                }} color={'blue.400'} fontWeight={500}>https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui
                                </Text>
                            </NextLink>


                        </ListItem>
                        <ListItem>
                            Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document:
                            <NextLink target="_blank" href='https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing ' passHref>
                                <Text align={'start'} _hover={{
                                    color: 'pink.400',
                                }} color={'blue.400'} fontWeight={500}>https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing </Text>
                            </NextLink>

                        </ListItem>

                        <ListItem>
                            Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document:
                            <NextLink target="_blank" href='https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing 
' passHref>
                                <Text align={'start'} _hover={{
                                    color: 'pink.400',
                                }} color={'blue.400'} fontWeight={500}>https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing
                                </Text>
                            </NextLink>


                        </ListItem>
                    </OrderedList>


                    <Text textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                        The best-developed Website will be hosted on
                        {''}<Text textAlign={'left'} as={'span'} color={'blue.400'} > www.piaic.org   </Text> {''}domain.
                    </Text>





                    <Text color={'gray.600'} fontSize={'xl'}>
                        After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:

                    </Text>


                </Stack>
            </Box>

            <Box p={4}>
                <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>



                    <Heading fontSize={'2xl'}> Quizzes</Heading>

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
                                        Fundamentals of Version Control with Git Quiz
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}> Fundamentals of Version Control with Git Quiz
                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos)

                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>


                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}>  Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias Günther </Text>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}> We will also cover these readings:  </Text>




                                        <UnorderedList>
                                            <ListItem>
                                                <NextLink target="_blank" href='https://help.github.com/articles/markdown-basics/ ' passHref>
                                                    <Text align={'start'} _hover={{
                                                        color: 'blue.400',
                                                    }} color={'black.400'} fontWeight={500}> https://help.github.com/articles/markdown-basics/
                                                    </Text>
                                                </NextLink>

                                            </ListItem>

                                            <ListItem>
                                                <NextLink target="_blank" href='http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github' passHref>
                                                    <Text align={'start'} _hover={{
                                                        color: 'blue.400',
                                                    }} color={'black.400'} fontWeight={500}> http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github
                                                    </Text>
                                                </NextLink>
                                            </ListItem>

                                            <ListItem> <NextLink target="_blank" href='http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences' passHref>
                                                <Text align={'start'} _hover={{
                                                    color: 'blue.400',
                                                }} color={'black.400'} fontWeight={500}> http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences
                                                </Text>
                                            </NextLink></ListItem>

                                            <ListItem> <NextLink target="_blank" href='https://git-scm.com/book/en/v2/Git-Branching-Rebasing' passHref>
                                                <Text align={'start'} _hover={{
                                                    color: 'blue.400',
                                                }} color={'black.400'} fontWeight={500}> https://git-scm.com/book/en/v2/Git-Branching-Rebasing
                                                </Text>
                                            </NextLink></ListItem>

                                            <ListItem> <NextLink target="_blank" href='http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches' passHref>
                                                <Text align={'start'} _hover={{
                                                    color: 'blue.400',
                                                }} color={'black.400'} fontWeight={500}> http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches
                                                </Text>
                                            </NextLink></ListItem>



                                        </UnorderedList>


                                    </Stack>
                                </HStack>

                                {/* ---------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}>  For practice:
                                            {' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}> <Link target="_blank" href='https://try.github.io/levels/1/challenges/1' />https://try.github.io/levels/1/challenges/1 </Text>
                                        </Text></Stack>
                                </HStack>

                                {/* ---------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}>  Homework:
                                            {' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}> <Link target="_blank" href='https://www.datacamp.com/courses/introduction-to-git-for-data-science  ' />https://www.datacamp.com/courses/introduction-to-git-for-data-science  </Text>
                                        </Text></Stack>
                                </HStack>


                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}>Git Cheatsheet:
                                            {' '} <Text as={'span'} align={'start'} color={'blue.400'} fontWeight={500}> <Link target="_blank" href='https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html' />https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html</Text>
                                        </Text></Stack>
                                </HStack>


                                {/* ----------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}> Git Quiz </Text>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}> Total Questions: 60 </Text>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}> Duration: 75 minutes  </Text>


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
                                        TypeScript Proficiency Quiz

                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>


                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}>  Total Questions: 63 </Text>
                                        <Text align={'start'} color={'black.400'} fontWeight={500}>  Duration: 120 minutes  </Text>


                                    </Stack>
                                </HStack>

                                {/* -------------------------------------------------------- */}
                                <HStack align={'top'} spacing={5} mb={2}>
                                    <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                    <Stack align={'start'}>
                                        <NextLink target="_blank" href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob' passHref>
                                            <Text align={'start'} _hover={{
                                                color: 'blue.400',
                                            }} color={'black.400'} fontWeight={500}>Study Material:
                                                <br />https://github.com/panaverse/learn-typescript


                                            </Text>
                                        </NextLink>
                                    </Stack>
                                </HStack>
                            </AccordionPanel>
                        </AccordionItem>

                    </Accordion>




                </Stack>
            </Box>
        </ChakraProvider >

    );
}


