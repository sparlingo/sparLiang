import React from 'react'
import { graphql, Link } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import {
  Avatar,
  Box,
  Container,
  Heading,
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
                  // h={'200px'}
                  bg={'gray.100'}
                  mt={-4}
                  mx={-6}
                  mb={4}
                  pos={'relative'}
                >
                  <GatsbyImage 
                    image={frontmatter.heroImage.childImageSharp.gatsbyImageData} 
                    alt="A Picture"
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
                      {frontmatter.description}
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
                    <Text fontWeight={600}>Kevin Sparling</Text>
                    <Text color={'gray.500'}>{frontmatter.date}</Text>
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
          description
          date(formatString: "YYYY MMMM Do")
          slug
          heroImage {
            childImageSharp {
              gatsbyImageData
            }
        }
        }
      }
    }
  }
`
