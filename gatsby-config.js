require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

// https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi
// const strapiConfig = {
//   apiURL: process.env.STRAPI_API_URL,
//   accessToken: process.env.STRAPI_TOKEN,
//   collectionTypes: [
//     {
//       singularName: "article",
//       queryParams: {
//         populate: {
//           cover: "*",
//           blocks: {
//             populate: "*",
//           },
//           author: "*"
//         },
//       },
//     },
//     {
//       singularName: "author",
//     },
//     {
//       singularName: "category",
//     },
//   ],
//   singleTypes: [],
// }

module.exports = {
  siteMetadata: {
    siteUrl: `https://sparliang.netlify.app`,
    title: `SparLiang`,
    description: `A blog/gallery for the SparLiang family`
  },
  plugins: [
    {
      resolve: `@chakra-ui/gatsby-plugin`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
  ],
}
