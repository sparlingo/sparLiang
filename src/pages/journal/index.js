import React from 'react'
import { graphql, Link } from "gatsby"
import {
  Avatar,
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

import Layout from '../../components/Layout'

export default function PostList({ data }) {
  
  return (
    <>
      <Layout>
        <Container maxW='7xl'>
          <Heading 
            as='h2'
            mb={3}
          >
            Journal Entries
          </Heading>
          <SimpleGrid
            columns={3}
            spacing={8}
            pb={6}
          >
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter }) => (
              <Box py={2} key={id}
                maxW={'495px'}
                // minH={'500px'}
                w={'full'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'md'}
                p={2}
                overflow={'hidden'}>
                <Box
                  h={'200px'}
                  bg={'gray.100'}
                  mt={-4}
                  mx={-6}
                  mb={"88px"}
                  pos={'relative'}>
                  <Image
                    src={
                      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    }
                    layout={'fill'}
                    alt='Filler Image'
                  />
                </Box>
                <Link to={`/journal/${frontmatter.slug}`}>
                  <Stack>
                    <Heading
                      color={'black'}
                      fontSize={'2xl'}
                      fontFamily={'body'}
                      py={1}
                    >
                      {frontmatter.title}
                    </Heading>
                    <Text color={'gray.500'}>
                      {frontmatter.date}
                    </Text>
                    <Text>
                      {excerpt}
                    </Text>
                  </Stack>
                </Link>
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
            ))}
          </SimpleGrid>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          slug
        }
      }
    }
  }
`
