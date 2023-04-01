"use client"
import { ReactNode, ReactElement } from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar, Icon,
    IconProps, Image,
    useColorModeValue, StackDivider, useBreakpointValue,
} from '@chakra-ui/react';



const IMAGE = './home/metaverse-bg.jpg';
const IMAGE2 = './home/istockphoto-1136829806-612x612.jpg';
const IMAGE3 = './home/899.jpg';
const IMAGE4 = './home/16695.jpg';
const IMAGE5 = './home/32378.jpg';
const IMAGE6 = './home/55304.jpg';

export default function Specialized() {
    return (
        <Stack
            bgGradient='linear(to-r, gray.400, blue.900)' borderRadius={'25'}
        >
            <Container maxW={'8xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}  >
                    <Heading color={'gray.300'} >Specialized Tracks</Heading>
                    <Text color={'gray.200'}>After completing the first three quarters the participants will select one or more specializations consisting of two courses each</Text>
                </Stack>

                <Flex direction={{ base: 'column', md: 'row' }} align={'center'}>
                    {/* 1 */}
                    <Box
                        role={'group'}
                        p={6}
                        m={10}
                        mr={{ lg: 5 }}
                        minW={'330px'}
                        // maxW={'430px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1} textAlign={'center'}>
                        <Box
                            rounded={'lg'}
                            textAlign={'center'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGE})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}
                        >
                            <Image
                                rounded={'lg'}
                                height={230}
                                width='full'
                                alt="spec_image1s"
                                objectFit={'cover'}
                                src={IMAGE}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>

                            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                Web 3.0 (Blockchain) and Metaverse Specialization
                            </Heading>
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={500} fontSize={'xl'}> Quarter IV</Text>
                                <Text fontWeight={400} align="left" fontSize={'sm'}> W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</Text>
                            </Stack>

                            <Stack direction={'row'} align={'center'}>
                                <Text as={'span'} fontWeight={500} fontSize={'xl'}> Quarter V</Text>
                                <Text as={'span'} align="left" fontWeight={400} fontSize={'sm'}> MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</Text>
                            </Stack>
                        </Stack>
                    </Box>
                    {/* 2 */}
                    <Box
                        role={'group'}
                        p={6}
                        m={10}
                        mr={{ lg: 5 }}
                        minW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1} textAlign={'center'}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGE2})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}
                        >
                            <Image
                                rounded={'lg'}
                                height={230}
                                alt="spec_image2"
                                width='full'
                                objectFit={'cover'}
                                src={IMAGE2}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>

                            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                Artificial Intelligence (AI) and Deep Learning Specialization


                            </Heading>

                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={500} fontSize={'xl'}> Quarter IV</Text>
                                <Text fontWeight={500} align="left" fontSize={'sm'}> AI-351: Developing Planet-Scale Intelligent APIs and Python Programming</Text>
                            </Stack>

                            <Stack direction={'row'} align={'center'}>
                                <Text as={'span'} fontWeight={500} fontSize={'xl'}> Quarter V</Text>
                                <Text as={'span'} align="left" fontWeight={400} fontSize={'sm'}> AI-361: Deep Learning and MLOps</Text>
                            </Stack>
                        </Stack>
                    </Box>


                    {/* 3 */}
                    <Box
                        role={'group'}
                        p={6}
                        m={10}
                        minW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1} textAlign={'center'}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGE3})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}
                        >
                            <Image
                                rounded={'lg'}
                                height={230}
                                alt="spec_image3"
                                width='full'
                                objectFit={'cover'}
                                src={IMAGE3}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>

                            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                Cloud-Native Computing Specialization


                            </Heading>

                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={500} fontSize={'xl'}> Quarter IV</Text>
                                <Text fontWeight={400} align="left" fontSize={'sm'}> CN-351: Certified Kubernetes Application Developer (CKAD)</Text>
                            </Stack>

                            <Stack direction={'row'} align={'center'}>
                                <Text as={'span'} fontWeight={500} fontSize={'xl'}> Quarter V</Text>
                                <Text as={'span'} align="left" fontWeight={400} fontSize={'sm'}> CN-361: Developing Multi-Cloud APIs using CDK for Terraform</Text>
                            </Stack>
                        </Stack>
                    </Box>


                </Flex>
                <Flex direction={{ base: 'column', md: 'row' }} align={'center'}>
                    {/* 4 */}
                    <Box
                        role={'group'}
                        p={6}
                        m={10}
                        mr={{ lg: 5 }}
                        minW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1} textAlign={'center'}>
                        <Box
                            rounded={'lg'}
                            textAlign={'center'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGE4})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}
                        >
                            <Image
                                rounded={'lg'}
                                height={230}
                                alt="spec_image4"
                                width='full'
                                objectFit={'cover'}
                                src={IMAGE4}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>

                            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                Ambient Computing  and  IoT Specialization
                            </Heading>
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={500} align={'center'} fontSize={'xl'}> Quarter IV</Text>
                                <Text fontWeight={400} align={'left'} fontSize={'sm'}> CN-351: Certified Kubernetes Application Developer (CKAD)</Text>
                            </Stack>

                            <Stack direction={'row'} align={'center'}>
                                <Text as={'span'} align={'center'} fontWeight={500} fontSize={'xl'}> Quarter V</Text>
                                <Text as={'span'} align={'left'} fontWeight={400} fontSize={'sm'}> CN-361: Developing Multi-Cloud APIs using CDK for Terraform</Text>
                            </Stack>


                        </Stack>
                    </Box>
                    {/* 5 */}
                    <Box
                        role={'group'}
                        p={6}
                        m={10}
                        mr={{ lg: 5 }}
                        minW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1} textAlign={'center'}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGE5})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}
                        >
                            <Image
                                rounded={'lg'}
                                height={230}
                                width='full'
                                alt="spec_image5"
                                objectFit={'cover'}
                                src={IMAGE5}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>

                            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                Genomics and Bioinformatics Specialization
                            </Heading>

                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={500} fontSize={'xl'}> Quarter IV</Text>
                                <Text fontWeight={400} align="left" fontSize={'sm'}> CN-351: Certified Kubernetes Application Developer (CKAD)</Text>
                            </Stack>

                            <Stack direction={'row'} align={'center'}>
                                <Text as={'span'} fontWeight={500} fontSize={'xl'}> Quarter V</Text>
                                <Text as={'span'} align="left" fontWeight={400} fontSize={'sm'}> CN-361: Developing Multi-Cloud APIs using CDK for Terraform</Text>
                            </Stack>


                        </Stack>
                    </Box>


                    {/* 6 */}
                    <Box
                        role={'group'}
                        p={6}
                        m={10}
                        minW={'330px'}
                        w={'full'}
                        bg={useColorModeValue('white', 'gray.800')}
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1} textAlign={'center'}>
                        <Box
                            rounded={'lg'}
                            mt={-12}
                            pos={'relative'}
                            height={'230px'}
                            _after={{
                                transition: 'all .3s ease',
                                content: '""',
                                w: 'full',
                                h: 'full',
                                pos: 'absolute',
                                top: 5,
                                left: 0,
                                backgroundImage: `url(${IMAGE6})`,
                                filter: 'blur(15px)',
                                zIndex: -1,
                            }}
                            _groupHover={{
                                _after: {
                                    filter: 'blur(20px)',
                                },
                            }}
                        >
                            <Image
                                rounded={'lg'}
                                height={230}
                                width='full'
                                alt="spec_image6"
                                objectFit={'cover'}
                                src={IMAGE6}
                            />
                        </Box>
                        <Stack pt={10} align={'center'}>

                            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                                Network Programmability and Automation Specialization
                            </Heading>

                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                            <Stack direction={'row'} align={'center'}>
                                <Text fontWeight={500} fontSize={'xl'}> Quarter IV</Text>
                                <Text fontWeight={400} align="left" fontSize={'sm'}> CN-351: Certified Kubernetes Application Developer (CKAD)</Text>
                            </Stack>

                            <Stack direction={'row'} align={'center'}>
                                <Text as={'span'} fontWeight={500} fontSize={'xl'}> Quarter V</Text>
                                <Text as={'span'} align="left" fontWeight={400} fontSize={'sm'}> CN-361: Developing Multi-Cloud APIs using CDK for Terraform</Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Flex>
            </Container>
        </Stack>
    );
}
