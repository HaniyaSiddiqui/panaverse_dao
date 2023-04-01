"use client";
import React from 'react';
import {
  Box,
  Stack,
  Heading,
  Text, Flex,
  Container, Link, Image,
} from '@chakra-ui/react';

import Slider from 'react-slick';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer'

import { ChakraProvider } from '@chakra-ui/react'
import styles from '../page.module.css'
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Vision() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);


  const cards = [
    {
      title: 'OUR VISION',
      image: './home/123Z_2101.w020.n001.946B.p15.946.jpg',
      height: 'full',
    },

  ];

  return (
    <ChakraProvider>

      <Header />
      <Container maxW={'full'} pt={'100'}  >
        <Box
          borderRadius={'25'}
          width={'full'}
          overflow={'hidden'}

        >
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          {/* Left Icon */}

          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((card, index) => (
              <Box
                key={index}
                height={'2xl'}

                objectFit={'cover'}

                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundImage={`url(${card.image})`}>

                <Container size="container.lg" height="600px" position="relative">
                  <Stack
                    spacing={6}
                    w={'full'}
                    maxW={'lg'}
                    position="absolute"
                    top="50%"
                    transform="translate(0, -50%)">
                    <Heading textAlign={'center'} color={'gray.100'} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                      {card.title}
                    </Heading>

                  </Stack>
                </Container>
              </Box>
            ))}
          </Slider>


          <Box px={8} ml={{ lg: 20 }} mr={{ lg: 20 }}>
            <Box color={'pink.900'} textAlign="center" py={20} >
              <Heading as="h2" size="xl" mt={6} mb={2}>
                Vision
              </Heading>
              <Text textAlign="left" color={'gray.500'}>
                The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.
              </Text>
              <br />
              <Text textAlign="left" color={'gray.500'}>
                Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centered on decentralized technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.

              </Text>

              <Text textAlign="left">

                <Link color={'blue.300'} href="https://www.citivelocity.com/citigps/metaverse-and-money/">
                  https://www.citivelocity.com/citigps/metaverse-and-money/
                </Link>
              </Text>
            </Box>



            <Box color={'pink.900'} textAlign={'center'} mt={2} >
              <Heading textAlign="center" as="h2" size="xl"  >
                The Program in a Nutshell<br />
                {' '}
                <Text color={'blue.300'} as={'span'}>
                  Earn While You Learn
                </Text>{' '}
              </Heading>

              <Text textAlign="left" color={'gray.500'}>
                In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program&apos;s beginning. It resembles a cross between a corporate venture and an educational project.

              </Text>


            </Box>

            <Stack align={'center'}>
              <Flex direction={{ base: 'column', md: 'row' }}>
                <Image
                  className={styles.floating}
                  alt={'metaverse'}
                  height={'xl'}
                  objectFit={'cover'}
                  borderRadius={'25'}
                  src={
                    './home/Wavy_Tech-04_Single-12.jpg'
                  }
                />
              </Flex>

            </Stack>



            <Box color={'pink.900'} textAlign="center" mb={10}  >
              <Heading as="h2" size="xl" mt={6} mb={2} >
                Program of Studies
              </Heading>
              <Text textAlign="left" color={'gray.500'}>
                This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
              </Text>
            </Box>

          </Box>





        </Box>
      </Container>



      {/* Add Footer */}
      <Footer />


    </ChakraProvider>
  );
}