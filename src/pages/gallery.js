import React, {useState, useCallback } from 'react'
import { graphql } from 'gatsby'
import {
  Container,
  Heading,
} from '@chakra-ui/react'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'

import Layout from '../components/Layout'

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
      src: node.cloudinaryData.url,
      width: node.cloudinaryData.width,
      height: node.cloudinaryData.height
    }) 
  ))

  return (
    <>
      <Layout>
        <Container maxW={"6xl"}>
          <Heading as="h2">
            Photo Gallery
          </Heading>
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
        </Container>
      </Layout>
    </>
  )
}

// export default function GalleryPage() {
//   const data = useStaticQuery(graphql`
//     query CloudinaryImages {
//       allCloudinaryMedia {
//         edges {
//           node {
//             secure_url
//           }
//         }
//       }
//     }
//   `)
//   const clImages = data.allCloudinaryMedia.edges

//   return (
//     <>
//       <Layout>
//         <Container>
//             <Heading>Image Gallery</Heading>
//               {clImages.map((image, index) => (
//                 <div key={`${index}-cl`}>
//                   <Image src={image.node.secure_url} />
//                 </div>
//               ))}
//         </Container>
//       </Layout>
//     </>
//   )
// }

export const query = graphql`
  query GalleryQuery {
    allCloudinaryMedia {
      edges {
        node {
          cloudinaryData {
            url
            height
            width
          }
        }
      }
    }
  }
`
