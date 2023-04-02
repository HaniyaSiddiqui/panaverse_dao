import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack, Link, Flex, Image
} from '@chakra-ui/react';
import NextLink from 'next/link'
import { CheckIcon } from '@chakra-ui/icons';


const features = [
  {
    id: 1,
    title: "Top 5 Metaverse  jobs that will rule the future of tech industry",
    text: 'https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms ',
  },

  {
    id: 2,
    title: "Blockchain Developer Salary - Jun 2022",
    text: 'https://web3.career/web3-salaries/blockchain-developer',
  },

  {
    id: 3,
    title: "Web3 Salaries Soar to $750,000 for Rank-and-File Devs",
    text: '<a href="https://thedefiant.io/web3-soaring-salaries/"/> ',
  },

];
;


const outcomePoints = ['Product Ownership', 'Freelancing', 'Global Marketing by DAO', 'Boosting Economy.']

export default function Outcome() {
  return (
    <Container maxW={'8xl'} py={16} px={10}  >
      <Heading textAlign={{ lg: 'center' }} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={'pink.900'} >
        The Outcome for Participants of the Program</Heading>


      <Text pt={'10'} textAlign={'left'} color={'gray.600'} fontSize={'md'} align={'left'} >
        The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
      </Text>

      <Flex direction={{ base: 'column', md: 'row' }}>
        <Stack p={2} maxW={'2xl'} pl={{ lg: '40' }} direction={{ lg: 'column', md: 'row' }} >
          <Flex direction={{ base: 'column', md: 'row' }}>
            <Image
              alt={'metaverse'}
              objectFit={'cover'}
              h={'50vh'}
              borderRadius={'25'}
              src={
                './home/outcome.jpg'
              }
            />
          </Flex>
        </Stack >
        <Stack p={2} maxW={'2xl'} direction={{ lg: 'column', md: 'row' }} >
          <Container maxW={{ lg: '5xl' }}  >
            <Stack mt={10}  >
              <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <Stack>

                  <NextLink href='https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms' passHref>
                    <Text _hover={{
                      color: 'blue.200',
                    }} fontWeight={600}>Top 5 &apos;Metaverse&apos; jobs that will rule the future of tech industry</Text>
                  </NextLink>
                </Stack>
              </HStack>
            </Stack>

            <Stack mt={10} direction={{ base: 'column', md: 'row' }}>
              <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>

                <Stack>
                  <NextLink href='https://web3.career/web3-salaries/blockchain-developer ' passHref>
                    <Text _hover={{
                      color: 'blue.200',
                    }} fontWeight={600}>Blockchain Developer Salary - Jun 2022</Text>                    </NextLink>
                </Stack>
              </HStack>

            </Stack>

            <Stack mt={10} >
              <HStack align={'top'}>
                <Box color={'green.400'} px={2} >
                  <Icon as={CheckIcon} />
                </Box>

                <Stack>
                  <NextLink href='https://thedefiant.io/web3-soaring-salaries/' >
                    <Text _hover={{
                      color: 'blue.200',
                    }} fontWeight={600}>Web3 Salaries Soar to $750,000 for Rank-and-File Devs</Text>
                  </NextLink>
                </Stack>
              </HStack>

            </Stack>


            <Stack mt={10}>

              <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <Stack >


                  <NextLink href='https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022' passHref>
                    <Text _hover={{
                      color: 'blue.200',
                    }} fontWeight={600}>The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet&apos;s Uncharted Waters</Text>
                  </NextLink>
                </Stack>
              </HStack>

            </Stack>

            <Stack mt={10}>

              <HStack align={'top'}>
                <Box color={'green.400'} px={2}>
                  <Icon as={CheckIcon} />
                </Box>
                <Stack >


                  <NextLink href='https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/ ' passHref>
                    <Text _hover={{
                      color: 'blue.200',
                    }} fontWeight={600}>How To Become Metaverse Developer: Scope, Skills, and Salary</Text>
                  </NextLink>
                </Stack>
              </HStack>

            </Stack>

          </Container>
        </Stack >

      </Flex >
    </Container>
  );
}