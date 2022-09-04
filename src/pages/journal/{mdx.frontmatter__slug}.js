import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Text
} from '@chakra-ui/react'

import Layout from '../../components/Layout'

const BlogPost = ({ data: {mdx}, children }) => {
  const hero_img = getImage(mdx.frontmatter.heroImage.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <Container maxW="7xl">
        <Grid
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(8, 1fr)'
          minH={"1000px"}
          gap={5}
        >
          <GridItem colSpan={3}>
            <Flex flexDirection="column">
              <Heading as="h2">
                {mdx.frontmatter.title}
              </Heading>
              <Text color={'gray.500'}>{mdx.frontmatter.date}</Text>
              <GatsbyImage 
                width="300px" 
                image={hero_img} 
                alt="A Picture"
                mb={1}
              />
              <Spacer />
              <Text as='i' fontSize="lg">{mdx.frontmatter.description}</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={5}>
            {children}
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        heroImage {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
      }
    }
  }
`

export default BlogPost