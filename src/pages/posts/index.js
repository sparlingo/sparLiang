import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
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

import Layout from '../../components/Layout'

export default function PostList() {
  const { allStrapiArticle } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          id
          strapi_id
          title
          description
        }
      }
    }
  `)
  const articles = allStrapiArticle.nodes
  return (
    <>
      <Layout>
        <Container maxW='6xl'>
          <Heading as='h2'>
            Journal Entries
          </Heading>
          <Flex  
            gap={3}
          >
            {articles.map((article) => (
              <Center py={2} key={article.strapi_id}>
                <Box
                  maxW={'495px'}
                  w={'full'}
                  bg={'white'}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  p={3}
                  overflow={'hidden'}>
                  <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-4}
                    mx={-6}
                    mb={2}
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
                      py={1}
                    >
                      {article.title}
                    </Heading>
                    <Text color={'gray.500'}>
                      {article.description}
                    </Text>
                  </Stack>
                  <Stack mt={3} direction={'row'} spacing={4} align={'center'}>
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
            ))}
          </Flex>
        </Container>
      </Layout>
    </>
  )
}

