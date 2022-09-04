require('dotenv').config({
  // path: `.env.${process.env.NODE_ENV}`
  path: `.env`
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://sparling.netlify.app`,
    title: `SparLiang`,
    description: `A blog/gallery for the SparLiang family`
  },
  plugins: [
    {
      resolve: `@chakra-ui/gatsby-plugin`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SparLiang`,
        short_name: `SL`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./src/images/sparliang.png`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/gallery`,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        maxResults: 100,
        tags: true,
        prefix: `gatsby`
      },
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: 'gatsby',
        uploadSourceInstanceNames: ['images'],
        transformTypes: [`CloudinaryMedia`]
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800
            }
          }
        ]
      },
    },
    
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
  ],
}
