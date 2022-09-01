import React from 'react'
import { graphql } from 'gatsby'
import {
  Container,
  Heading,
} from '@chakra-ui/react'
import Gallery from 'react-photo-gallery'

import Layout from '../components/Layout'

export default function GalleryPage({ data }) {
  const photos = []
  data.allFile.edges.map(({ node }) => (
    photos.push({
      src: node.childImageSharp.gatsbyImageData.images.fallback.src,
      width: node.childImageSharp.gatsbyImageData.width,
      height: node.childImageSharp.gatsbyImageData.height
    }) 
  ))

  return (
    <>
      <Layout>
        <Container maxW={"6xl"}>
          <Heading as="h2">
            Photo Gallery
          </Heading>
          <Gallery photos={photos} />
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query GalleryQuery {
    allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`