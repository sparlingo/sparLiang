import * as React from "react"
import { Link } from "gatsby"
import {
  Heading
} from "@chakra-ui/react"

import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <>
      <Layout>
        <Heading as="h2">
          Page not found
        </Heading>
        <Link to="/">Go home</Link>
      </Layout>
    </>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
