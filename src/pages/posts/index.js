import React from 'react'
import {
  Avatar,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

export default function PostList({articles}) {

  return (
    <>
      <Container maxW='3xl'>
        <Heading as='h2'>
          Journal Entries
        </Heading>
        <Flex  
          gap={3}
        >
          {/* <Box maxW='200px'>
            <Heading as='h2'>
              Journal Entries
            </Heading>
          </Box> */}
          {/* {articles.map((article) => (
            <Center py={6} key={article.id}>
              <Box
                maxW={'495px'}
                w={'full'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                  h={'210px'}
                  bg={'gray.100'}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={'relative'}>
                  <Image
                    src={
                      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    }
                    layout={'fill'}
                    alt='Filler Image'
                  />
                </Box>
                <Stack>
                  <Heading
                    color={'black'}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    py={5}
                  >
                    {article.title}
                  </Heading>
                  <Text color={'gray.500'}>
                    {article.description}
                  </Text>
                </Stack>
                <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                  <Avatar
                    src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                    alt={'Author'}
                  />
                  <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={600}>Achim Rolle</Text>
                    <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                  </Stack>
                </Stack>
              </Box>
              
            </Center>
              
            ))} */}
        </Flex>
      </Container>
    </>
  )
}

