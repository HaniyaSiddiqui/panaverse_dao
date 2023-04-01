"use client"
import React, { ReactNode } from 'react';
import Wrapper from '@/app/components/shared/Wrapper'
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden, useTheme
} from '@chakra-ui/react';

import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaGithub } from 'react-icons/fa';

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    const theme = useTheme();
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            bgGradient='linear(to-r, blue.900, pink.900)'
            color={useColorModeValue('blue.300', 'blue.900')} pl={{ lg: '20' }} pr={{ lg: '20' }}>
            <Container
                as={Stack}
                maxW={'8xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Text>© 2023 Panaverse Dao. All rights reserved</Text>
                <Stack direction={'row'} spacing={6} >
                    <SocialButton label={'Facebook'} href={'https://www.facebook.com/groups/panaverse'}>
                        <FaFacebook />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'https://www.youtube.com/@panaverse/streams'}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'Twitter'} href={'https://twitter.com/Panaverse_edu'}>
                        <FaTwitter />
                    </SocialButton>

                    <SocialButton label={'Github'} href={'https://github.com/panaverse'}>
                        <FaGithub />
                    </SocialButton>


                </Stack>



            </Container>
        </Box>
    );
}