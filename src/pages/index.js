import React from 'react'

import Hero from '../components/Hero'
import Layout from '../components/Layout'

export default function HomePage() {
  return (
    <div>
      <Layout>
        <Hero />
      </Layout>
    </div>
  )
}

export const Head = () => <title>Home Page</title>
