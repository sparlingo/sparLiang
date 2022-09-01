import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Container,
  Grid,
  GridItem,
  Heading
} from '@chakra-ui/react'

import Layout from '../../components/Layout'

const BlogPost = ({ data, children }) => {
  const hero_img = getImage(data.mdx.frontmatter.heroImage.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <Container maxW="7xl">
        <Grid
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(8, 1fr)'
          minH={"1000px"}
        >
          <GridItem colSpan={3}>
            <Heading as="h2">
              {data.mdx.frontmatter.title}
            </Heading>
            <p>{data.mdx.frontmatter.date}</p>
            <GatsbyImage image={hero_img} alt="A Picture" />
          </GridItem>
          <GridItem colSpan={5}>
            <MDXProvider>{children}</MDXProvider>
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
        date(formatString: "MMMM DD, YYYY")
        heroImage {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
      }
    }
  }
`

export default BlogPost