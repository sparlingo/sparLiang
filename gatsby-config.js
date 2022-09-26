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
        prefix: `gatsby`,
        context: true
      },
    },
    // {
    //   resolve: `@piducancore/gatsby-source-cloudinary-metadata`,
    //   options: {
    //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // required
    //     api_key: process.env.CLOUDINARY_API_KEY, // required
    //     api_secret: process.env.CLOUDINARY_API_SECRET, // required
    //     max_results: 100, // optional, default: 10
    //     prefix: `gatsby`, // optional
    //     type: `upload`, // required if prefix param specified above, otherwise optional
    //   },
    // },
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
    {
      resolve: 'gatsby-remark-video',
      options: {
        width: 800,
        height: 'auto',
        preload: 'auto',
        muted: true,
        autoplay: true,
        playsinline: true,
        controls: true,
        loop: true
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
}
