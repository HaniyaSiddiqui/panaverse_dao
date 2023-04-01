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

export default function Outcome() {
  return (
    <Container maxW={'8xl'} py={16} as={Stack} px={{ lg: 20 }} spacing={{ base: 8, md: 10 }}>


      <Heading fontSize={'3xl'} textAlign={'center'}>The Outcome for Participants of the Program</Heading>
      <Text color={'gray.600'} fontSize={'md'} align={'left'} textAlign={'left'}>
        The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.

      </Text>


      <Flex direction={{ base: 'column', md: 'row' }}>
        <Stack maxW={'400px'} mt={10}>

          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <Stack >


              <NextLink href='https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms' passHref>
                <Text _hover={{
                  color: 'blue.200',
                }} fontWeight={600}>Top 5 &apos;Metaverse&apos; jobs that will rule the future of tech industry</Text>
              </NextLink>
            </Stack>
          </HStack>

        </Stack>

        <Stack maxW={'400px'} mt={10}>
          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <Stack >
              <NextLink href='https://web3.career/web3-salaries/blockchain-developer ' passHref>
                <Text _hover={{
                  color: 'blue.200',
                }} fontWeight={600}>Blockchain Developer Salary - Jun 2022</Text>                    </NextLink>
            </Stack>
          </HStack>
        </Stack>

        <Stack maxW={'400px'} mt={10} >

          <HStack align={'top'}>
            <Box color={'green.400'} px={2} pl={{ lg: 20 }}>
              <Icon as={CheckIcon} />
            </Box>
            <Stack >


              <NextLink href='https://thedefiant.io/web3-soaring-salaries/' passHref>
                <Text _hover={{
                  color: 'blue.200',
                }} fontWeight={600}>Web3 Salaries Soar to $750,000 for Rank-and-File Devs</Text>
              </NextLink>
            </Stack>
          </HStack>

        </Stack>
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Stack maxW={'400px'} mt={10}>
          <HStack align={'top'}>
            <Box color={'green.400'} px={2}>
              <Icon as={CheckIcon} />
            </Box>
            <Stack>
              <NextLink href='https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022' passHref>
                <Text _hover={{
                  color: 'blue.200',
                }} fontWeight={600}>The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet&apos;s Uncharted Waters</Text>
              </NextLink>
            </Stack>
          </HStack>
        </Stack>

        <Stack maxW={'400px'} mt={10}>
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
      </Flex>

      <Stack align={'center'}>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Image
            alt={'metaverse'}
            m={'10'}
            w={'200'}
            objectFit={'cover'}
            height={'500'}
            borderRadius={'25'}

            src={
              './home/30493.jpg'
            }
          />
        </Flex>

      </Stack>
    </Container >


  );
}