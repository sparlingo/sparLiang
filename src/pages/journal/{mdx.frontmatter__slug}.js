import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Container,
  Heading
} from '@chakra-ui/react'

import Layout from '../../components/Layout'

const BlogPost = ({ data, children }) => {
  return (
    <Layout>
      <Container maxW="4xl">
        <Heading as="h2">
          {data.mdx.frontmatter.title}
        </Heading>
        <p>{data.mdx.frontmatter.date}</p>
        {children}
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
      }
    }
  }
`

export default BlogPost