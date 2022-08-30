import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Box,
  Heading,
  Text
} from "@chakra-ui/react"

// import BlocksRenderer from "../components/blocks-renderer"
import Layout from "../components/Layout"

const ArticlePage = ({ data }) => {
  const article = data.strapiArticle
  //const coverImage = getImage(article.url)
  // const seo = {
  //   metaTitle: article.title,
  //   metaDescription: article.description,
  //   shareImage: article.cover,
  // }
  // console.log(article.cover.localfile.url)
  return (
    <>
      <Layout as="article">
      {/* <Seo seo={seo} /> */}
        <Box>
          <Heading>
            {article.title}
          </Heading>
          <Text>
            {article.description}
          </Text>
          {/* <GatsbyImage src={coverImage} /> */}
          {/* <main>
            <BlocksRenderer blocks={article.blocks || []} />
          </main> */}
        </Box>
        
    </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
      id
      slug
      title
      description
    }
  }
`

export default ArticlePage