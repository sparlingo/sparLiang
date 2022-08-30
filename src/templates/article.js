import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Box,
  Heading,
  Text
} from "@chakra-ui/react"

// import BlocksRenderer from "../components/blocks-renderer"
import Layout from "../components/Layout"

const ArticlePage = ({ data }) => {
  const article = data.strapiArticle

  // const seo = {
  //   metaTitle: article.title,
  //   metaDescription: article.description,
  //   shareImage: article.cover,
  // }

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
          <GatsbyImage
            image={getImage(article?.cover?.localFile.url)}
            alt={article?.cover?.alternativeText}
          />
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
      # blocks {
      #   ...Blocks
      # }
      cover {
        alternativeText
        localFile {
          url
          # childImageSharp {
          #   gatsbyImageData
          # }
        }
      }
    }
  }
`

export default ArticlePage