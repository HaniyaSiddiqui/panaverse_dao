"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import Homepage from '@/app/components/widgets/Home'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import Wrapper from '@/app/components/shared/Wrapper'
import theme from "./theme"
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <Wrapper >
        <ChakraProvider theme={theme}>
          <Header />
          <Homepage />
          <Footer />
        </ChakraProvider>

      </Wrapper>
    </main>

  )
}
