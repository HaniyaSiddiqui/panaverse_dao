"use client"
import Image from 'next/image'

import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import Homepage from '@/app/components/widgets/Home'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import Wrapper from '@/app/components/shared/Wrapper'


export default function Home() {
  return (
    <Wrapper>
      <ChakraProvider>
        <Header />
        <Homepage />
        <Footer />
      </ChakraProvider>

    </Wrapper>
  )
}
