"use client";
import { ReactElement } from 'react';
import {
    Flex,
    Heading,
    Stack,
    Text,
    Icon,
    Image, StackDivider, useBreakpointValue, useColorModeValue,



} from '@chakra-ui/react';


import styles from '@/app/page.module.css'

import {
    IoOptions,
    IoLogoUsd,
    IoCloudSharp,
} from 'react-icons/io5';

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}


const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};
export default function Core() {
    return (
        <Stack direction={{ base: 'column', md: 'row' }} align={'center'}>
            <Flex p={2} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} maxW={'xl'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: useBreakpointValue({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                color: 'pink.500',
                                bg: 'blue.900',
                                zIndex: -1,
                            }}>
                            <Text color={'blue.500'} as={'span'}> Core Courses</Text>
                        </Text>
                        <br />{' '}
                        <Text color={'pink.900'} as={'span'}>
                            Common In All Programs
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Every participant of the program will start by completing the following three core courses:
                    </Text>
                    <Stack
                        spacing={1}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={
                                <Icon as={IoOptions} color={'blue.500'} w={5} h={5} />

                            }
                            iconBg={useColorModeValue('blue.900', 'blue.900')}
                            text={'Quarter I (Core)'}
                        />
                        <Text color={'blue.500'} as={'span'}> CS-101: Object-Oriented Programming using TypeScript</Text>
                        <Feature
                            icon={<Icon as={IoCloudSharp} color={'pink.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Quarter II (Core)'}
                        />
                        <Text color={'blue.500'} as={'span'}> W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Text>
                        <Feature
                            icon={
                                <Icon as={IoLogoUsd} color={'purple.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('purple.900', 'purple.900')}
                            text={'Quarter III (Core)'}
                        />
                        <Text color={'blue.500'} as={'span'}>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Text>
                    </Stack>
                </Stack>


            </Flex>
            <Flex flex={1}>
                <Image

                    mt={{ lg: '20' }} mb={{ md: '20', sm: '20' }}
                    w={'500'}
                    h={'500'}
                    borderRadius={'25'}
                    alt="core"
                    src={
                        './home/19198867.jpg'
                    }
                />
            </Flex>
        </Stack>
    )
}
