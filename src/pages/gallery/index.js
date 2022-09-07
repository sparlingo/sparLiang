import React, {useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import {
  Container,
  Heading,
  Spinner,
} from '@chakra-ui/react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import Layout from '../../components/Layout'

export default function GalleryPage({ data }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index}) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  // setup photos for gallery
  const photos = []
  data.allCloudinaryMedia.edges.map(({ node }) => (
    photos.push({
      src: node.gatsbyImageData.images.fallback.src,
      width: node.gatsbyImageData.width,
      height: node.gatsbyImageData.height,
    }) 
  ))

  return (
    <>
      <Layout>
        <Container maxW={"6xl"}>
          <Heading 
            as="h2"
            mb={3}
          >
            Photo Gallery
          </Heading>
          <React.Suspense fallback={Spinner}>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ): null}
            </ModalGateway>
          </React.Suspense>
        </Container>
      </Layout>
    </>
  )
}

export const Head = () => <title>Gallery Page</title>

export const query = graphql`
  query GalleryQuery {
    allCloudinaryMedia {
      edges {
        node {
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
          )
        }
      }
    }
  }
`
