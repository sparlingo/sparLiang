require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

// https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "article",
      queryParams: {
        populate: {
          cover: "*",
          blocks: {
            populate: "*",
          },
        },
      },
    },
    {
      singularName: "author",
    },
    {
      singularName: "category",
    },
  ],
  singleTypes: [],
}

module.exports = {
  siteMetadata: {
    siteUrl: `https://sparliang.netlify.app`,
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `@chakra-ui/gatsby-plugin`
    }
  ],
}
