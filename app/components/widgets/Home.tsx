"use client";
import { ReactNode } from 'react';
import {
    Flex, Box,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps, Image, Link
} from '@chakra-ui/react';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";



import Corequarters from '@/app/components/widgets/Core';
import SpecializedTrack from '@/app/components/widgets/Specialized';
import Outcome from '@/app/components/widgets/Outcome';


export default function Home() {

    const [text, setText] = useState("");
    const [isWriting, setIsWriting] = useState(true);

    useEffect(() => {
        const textContent = "Earn as you Learn Program";
        let currentIndex = 0;
        let timeout = 0;

        const writeText = () => {
            if (currentIndex === textContent.length) {
                setIsWriting(false);
                return;
            }

            setText(textContent.slice(0, currentIndex + 1));
            currentIndex++;
            timeout = setTimeout(writeText, 50);
        };

        writeText();

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Container maxW={'full'} pt={'110'}  >
            <Stack
                bgGradient='linear(to-r, blue.900, pink.900)'
                borderRadius={'25'}
                textAlign={{ lg: 'left', md: 'left', sm: 'center' }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 10, md: 28 }}
                px={'10'}

                h={{ lg: "85vh", md: "100vh", sm: "100vh" }}
            >

                <Stack direction={{ base: 'column', lg: 'column', md: 'column', sm: 'row' }} pl={{ lg: '10' }}>

                    <Heading
                        maxW="800px"
                        fontWeight={'800'}
                        mt={{ md: 30, sm: 50 }}
                        fontSize={{ base: '6xl', md: '4lg', sm: '2lg' }}
                        color={'gray.100'}>
                        Certified  {' '}
                        <Text as={'span'} color={'blue.300'}>
                            Web 3.0
                        </Text>
                        {' '}  and  {' '}
                        <Text as={'span'} color={'blue.300'}>Metaverse </Text> Developer
                    </Heading>

                    <Flex pt={4} flex={1} >
                        <Stack spacing={8} direction={{ base: 'column', md: 'row' }}>
                            <Box
                                flex={1}
                                color={'gray.400'} >
                                <Box mb={{ base: 8, md: 20 }} >
                                    <Text as={'span'}
                                        fontFamily={'heading'}
                                        fontWeight={700}
                                        textTransform={'uppercase'}
                                        mt={10}
                                        mb={10}
                                        fontSize={'lg'}
                                        color={'pink:300'}>
                                        A One and Quarter Years Panaverse DAO {' '} <br />
                                        <Text as={'span'} color={'pink.300'} pb={30}>{text}
                                            {isWriting && <span className="blink">|</span>}</Text>
                                    </Text>
                                    <Heading
                                        mt={10}
                                        mb={5}
                                        fontSize={{ base: 'xl', md: '2xl' }} color={'blue.300'}>
                                        Getting Ready for the Next Generation of the Internet
                                    </Heading>
                                    <Text fontSize={{ base: 'lg', md: 'sm', sm: 'xs' }} color={'gray:100'} mt={{ lg: 10, sm: 5 }}>
                                        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                                    </Text>
                                </Box>

                                <Stack float="left" direction={{ base: 'column', md: 'row' }} mt={{ lg: '-10' }} spacing={3}>

                                    <Link href="Syllabus" >
                                        <Button
                                            rounded={'full'}
                                            bgGradient='linear(to-l, blue.700, pink.700)'
                                            color={'white'}

                                            borderRadius='100'
                                            _hover={{
                                                bgGradient: 'linear(to-r, pink.500, blue.900)',
                                            }}

                                            borderColor={'pink.200'}
                                        >
                                            <Image src="./home/courseIcon.png" w="10" h="10" alt="courses" /> Courses
                                        </Button>
                                    </Link>


                                </Stack>
                            </Box>
                            <Box float="right">
                                <motion.div
                                    style={{ x: "100vw" }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 2, type: "floating", stiffness: 120 }}
                                >
                                    <Image float="right"
                                        mt={{ lg: -60, sm: -40 }}

                                        alt="metaverse"
                                        height={{ base: '600', lg: '550', md: '200', sm: '250' }}
                                        src={
                                            './home/79.png'
                                        }
                                    />
                                </motion.div>
                            </Box>
                        </Stack>
                    </Flex>
                </Stack>
            </Stack >

            <Corequarters />
            <SpecializedTrack />
            <Outcome />





        </Container >
    );
}

export const Illustration = (props: IconProps) => {
    return (
        <Image src="./home/123Z_2101.w020.n001.946B.p15.946.jpg" alt="illustration" width={"half"} position="relative" />
    );
};


