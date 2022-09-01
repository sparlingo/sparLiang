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
    siteUrl: `https://sparling.netlify.app`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          }
        ]
        // defaultLayouts: {
        //   // This entry template will switch the page template based on
        //   // a frontmatter value provided in the CMS, allowing users to
        //   // choose different template layouts.
        //   // default: require.resolve(`./src/page-templates/cms-entry.template.js`)
        // },
      },
    },
    
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
  ],
}
