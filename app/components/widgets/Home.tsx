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
    IconProps, Image
} from '@chakra-ui/react';



import Corequarters from '@/app/components/widgets/Core';
import SpecializedTrack from '@/app/components/widgets/Specialized';
import Outcome from '@/app/components/widgets/Outcome';


export default function Home() {
    return (
        <Container maxW={'full'} pt={'100'}  >
            <Stack
                bgGradient='linear(to-r, blue.900, pink.900)'
                borderRadius={'25'}
                textAlign={{ lg: 'left', md: 'left', sm: 'center' }}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 10, md: 28 }}
                px={'10'}

            >



                <Stack direction={{ base: 'column', lg: 'column', md: 'row' }} pl={{ lg: '10' }}>
                    <Heading
                        fontWeight={800}
                        fontSize={{ base: '4xl', sm: '4xl', md: '6xl' }}
                        color={'gray.100'}>
                        Certified  {' '}
                        <Text as={'span'} color={'blue.300'}>
                            Web 3.0
                        </Text>
                        {' '}  and  {' '}
                        <Text as={'span'} color={'blue.300'}>Metaverse </Text> Developer
                    </Heading>
                    <Flex pt={4} flex={1} >
                        <Stack spacing={8} direction={{ base: 'column', lg: 'row', md: 'row' }}>
                            <Box
                                flex={1}
                                color={'gray.400'}
                            >
                                <Box mb={{ base: 8, md: 20 }} >
                                    <Text as={'span'}
                                        fontFamily={'heading'}
                                        fontWeight={700}
                                        textTransform={'uppercase'}
                                        mb={3}
                                        fontSize={'xl'}
                                        color={'pink:300'}>
                                        A One and Quarter Years Panaverse DAO {' '} <br />
                                        <Text as={'span'} color={'pink.300'}>Earn as you Learn Program</Text>
                                    </Text>
                                    <Heading

                                        mb={5}
                                        fontSize={{ base: '3xl', md: '5xl' }} color={'blue.300'}>
                                        Getting Ready for the Next Generation of the Internet
                                    </Heading>
                                    <Text fontSize={'xl'} color={'gray:100'}>
                                        Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                                    </Text>
                                </Box>

                                <Stack direction={{ base: 'column', md: 'row' }} mt={{ lg: '-10' }} spacing={3}>

                                    <Button
                                        rounded={'full'}
                                        bg={'pink.500'}
                                        color={'white'}
                                        borderRadius='100'
                                        _hover={{
                                            bgGradient: 'linear(to-r, pink.500, blue.900)',
                                        }}
                                    >
                                        <Image src="./home/courseIcon.png" w="10" h="10" alt="courses" /> Courses
                                    </Button>

                                </Stack>
                            </Box>
                            <Flex flex={1}>
                                <Image


                                    mt={{ lg: '-30' }}
                                    alt="metaverse"
                                    // objectFit={'cover'}
                                    height={'700'}
                                    src={
                                        './home/79.png'
                                    }


                                />
                            </Flex>
                        </Stack>
                    </Flex>
                </Stack>



            </Stack>

            <Corequarters />
            <SpecializedTrack />
            <Outcome />





        </Container>
    );
}

export const Illustration = (props: IconProps) => {
    return (
        <Image src="./home/123Z_2101.w020.n001.946B.p15.946.jpg" alt="illustration" width={"half"} position="relative" />
    );
};


