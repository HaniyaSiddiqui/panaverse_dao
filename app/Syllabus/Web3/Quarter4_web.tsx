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

export default function Quarter4_web() {
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
                        <Text w={'full'} color={'blue.500'} as={'span'}> Web 3 and Metaverse Specialization</Text>
                    </Text>

                </Heading>
                <Text fontWeight={'5xl'} fontSize={{ base: 'md', lg: 'xl' }} color={'pink.900'}>
                    W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps

                </Text>
                <Heading fontSize={'3xl'}>Course Description</Heading>
                <Text textAlign={'left'} color={'gray.600'} fontSize={'xl'}>
                    In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.

                    <Text as={'span'} _hover={{
                        color: 'pink.400',
                    }} color={'blue.400'}>
                        <Link href='https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db'>
                            https://javascript.plainenglish.io/why-you-should-learn-web-2-0-before-getting-into-web-3-0-d251625990db
                        </Link></Text></Text>

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
                                    Blockchain and Metaverse Theory
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            The Metaverse: And How It Will Revolutionize Everything by Matthew Ball

                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Mastering Blockchain - Fourth Edition by Imran Bashir

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
                                    Smart Contract Development in Solidity

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Solidity Programming Essentials - Second Edition By Ritesh Modi
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://github.com/panaverse/defi-dapps-solidity-smart-contracts' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Solidity Learning Repo

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
                                    Dapp Development using Ethers.js and Next.js 13

                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://github.com/panaverse/dapps-nextjs' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Dapp Learning Repo
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>




                        </AccordionPanel>
                    </AccordionItem>


                    {/* ************    4  ************ */}

                    <AccordionItem m={2}>
                        <h2>
                            <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                _hover={{
                                    bgGradient: 'linear(to-r, pink.500, blue.900)',
                                }} borderRadius={'25px'}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Tokennomics

                                </Box>

                            </AccordionButton>
                        </h2>


                    </AccordionItem>


                    {/* ************    5  ************ */}

                    <AccordionItem m={2}>
                        <h2>
                            <AccordionButton fontWeight={'2xl'} color={'gray.100'} bgGradient='linear(to-b, blue.900, pink.900)'
                                _hover={{
                                    bgGradient: 'linear(to-r, pink.500, blue.900)',
                                }} borderRadius={'25px'}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Blockchain Project: Create a Token and Launch ICO/IEO/IDO


                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        As you probably know, the ICO ("Initial Coin Offering") industry has been booming, and it's completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia's list of highest crowdfunding projects
                                        {' '}   <Text as={'span'} color={'blue.400'} >
                                            <Link href='https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects'>
                                                https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects </Link></Text>{' '},
                                        and you'll notice that blockchain projects absolutely dominate the list.
                                    </Text>
                                </Stack>
                            </HStack>
                            {/* ---------------------- */}
                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://phemex.com/blogs/what-is-a-dex-ido' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Understand the difference between IDO vs. IEO vs. ICO

                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>
                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Also check these links for latest listings:
                                    </Text>

                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://icodrops.com' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            CO list at ICO Drops

                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://topicolist.com/' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            ICO List of Best New Initial Coin Offerings
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://cryptototem.com/ico-list/' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOs
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://www.icolistingonline.com' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            ICO List Online
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://coincodex.com/ieo-list/binance/' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Binance IEO List
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://www.coinspeaker.com/ieo/platform/binance-launchpad/' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Binance Launchpad
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://icomarks.com/ieo' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            IEO List
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://polkastarter.com' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Polkastarter
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>

                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Project Part 1: How to Launch a IEO on Binance Launchpad

                                    </Text>

                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://appinventiv.com/blog/how-to-launch-an-ieo/' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Read How to Launch an IEO
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'red.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Note: Also document the alternatives to Binance Launchpad
                                    </Text>

                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Project Part 2: How to Launch a IDO on Polkastarter

                                    </Text>

                                </Stack>
                            </HStack>



                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Your first task of the project is to make a google slides presentation on how to start a IEO on the Binance Launch Pad
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://cryptorank.io/fundraising-platforms ' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Review the list of top fundraising platforms
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>



                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <NextLink target="_blank" href='https://polkastarter.com/' passHref>
                                        <Text align={'start'} _hover={{
                                            color: 'blue.400',
                                        }} color={'black.400'} fontWeight={500}>
                                            Your second task of the project is to make a google slides presentation on how to start a IDO on the Polkastarter
                                        </Text>
                                    </NextLink>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Project Part 3: Create a Pako Token
                                    </Text>


                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future
                                    </Text>

                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Therefore, for the sake of this chapter, let's imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).

                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.

                                    </Text>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Project Part 4: Develop Crowd Sale Contract
                                    </Text>


                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)
                                    </Text>

                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Implement a payable buyToken() function.
                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought
                                    </Text>


                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.
                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.
                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        You can use the openzeppelin crowd sale contracts

                                        <Text as={'span'} >
                                            <Link color={'blue.400'} href='https://docs.openzeppelin.com/contracts/4.x/crowdsales'> https://docs.openzeppelin.com/contracts/4.x/crowdsales
                                            </Link>  </Text>
                                        however you will have to update the code to the latest solidity version.
                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.
                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Note: Before you get started writing the token contract we suggest you review the access control

                                        <Text as={'span'} >
                                            <Link color={'blue.400'} href='https://docs.openzeppelin.com/contracts/4.x/access-control'> https://docs.openzeppelin.com/contracts/4.x/access-control</Link>   </Text>


                                    </Text>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Project Part 4: Develop Crowd Sale Contract
                                    </Text>


                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)
                                    </Text>

                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Implement a payable buyToken() function.
                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought
                                    </Text>


                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.
                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.
                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        You can use the openzeppelin crowd sale contracts

                                        <Text as={'span'} >
                                            <Link color={'blue.400'} href='https://docs.openzeppelin.com/contracts/4.x/crowdsales'> https://docs.openzeppelin.com/contracts/4.x/crowdsales
                                            </Link>  </Text>
                                        however you will have to update the code to the latest solidity version.
                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.
                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Note: Before you get started writing the token contract we suggest you review the access control

                                        <Text as={'span'} >
                                            <Link color={'blue.400'} href='https://docs.openzeppelin.com/contracts/4.x/access-control'> https://docs.openzeppelin.com/contracts/4.x/access-control</Link>   </Text>


                                    </Text>
                                </Stack>
                            </HStack>

                            {/* 5 */}
                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Project Part 5: Trying it with MetaMask
                                    </Text>


                                    <Text mt={2} align={'start'} color={'black.400'} fontWeight={500}>
                                        While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!
                                    </Text>

                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.

                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        When it's done, take note of what addresses the contracts were uploaded to and copy it!
                                    </Text>


                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.
                                    </Text>



                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to "register" it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!
                                    </Text>

                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        To do this, open the side menu and click on the "Add token" button to get started:
                                    </Text>

                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field</Text>

                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!
                                    </Text>


                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Project Part 6: Trying it with Multisignature Wallets
                                    </Text>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={LinkIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Read
                                        {' '}   <Text as={'span'} color={'blue.400'} >
                                            <Link href='https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/'>
                                                https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/
                                            </Link>
                                        </Text>
                                    </Text>


                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Now use Gnosis Safe {' '}
                                        <Text as={'span'} color={'blue.400'} >
                                            <Link color={'blue.400'} href='https://gnosis-safe.io/ '>

                                                https://gnosis-safe.io/
                                            </Link>

                                        </Text> {' '} with multi-sigs to do what you did in the last part.

                                    </Text>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Project Part 7: Sending Tokens using Ethers.js

                                    </Text>

                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Write a Typescript program to send Pako Token to some friend's address using Ethers.js.

                                    </Text>


                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        You may follow this tutorial{' '}
                                        <Text as={'span'} >
                                            <Link color={'blue.400'} href='https://ethereum.org/en/developers/tutorials/send-token-etherjs/'>https://ethereum.org/en/developers/tutorials/send-token-etherjs/</Link> </Text>
                                    </Text>
                                </Stack>
                            </HStack>


                            <HStack align={'top'} spacing={5} mb={2}>
                                <Box color={'green.400'} px={2}><Icon as={ArrowRightIcon} /> </Box>
                                <Stack align={'start'}>
                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT


                                    </Text>


                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Read this NFT tutorial series
                                        {' '}<Text as={'span'} >
                                            <Link color={'blue.400'} href='https://ethereum.org/en/developers/tutorials/send-token-etherjs/'>
                                                https://ethereum.org/en/developers/tutorials/send-token-etherjs/</Link> </Text>

                                    </Text>


                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Create a NFT contract using the OpenZepplen ERC721 NFT Standard
                                        {' '} <Text as={'span'} >
                                            <Link color={'blue.400'} href='https://docs.openzeppelin.com/contracts/4.x/erc721'>
                                                https://docs.openzeppelin.com/contracts/4.x/erc721</Link> </Text>
                                    </Text>


                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        You may use the Preset ERC721 contract
                                        {' '} <Text as={'span'} >  <Link color={'blue.400'} href='https://docs.openzeppelin.com/contracts/4.x/erc721#Presets'>
                                            https://docs.openzeppelin.com/contracts/4.x/erc721#Presets</Link> </Text>
                                    </Text>


                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace

                                        {' '}<Text as={'span'} >
                                            <Link color={'blue.400'} href='https://opensea.io/ '>
                                                https://opensea.io/ </Link> </Text>
                                        {' '}

                                        for sale.
                                    </Text>

                                    <Text align={'start'} color={'black.400'} fontWeight={500}>
                                        Implement a ERC721 Market
                                        {' '} <Text as={'span'} >   <Link color={'blue.400'} href='https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/'>
                                            https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/</Link> </Text>
                                    </Text>



                                </Stack>
                            </HStack>






                        </AccordionPanel>
                    </AccordionItem>




                </Accordion >

            </Container >
        </Box >

    );
}


