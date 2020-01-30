module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum, dui et tristique tristique, turpis lorem pulvinar nulla, in maximus nisl tellus vitae purus. Mauris quis imperdiet metus.`,
    author: `@gatsbyjs`,
    copyright: `© Copyright - All Rights Reserved`,
    siteUrl: `https://www.example.com`,
    socialMedia: {
      github: 'https://github.com/thiagofranchin',
      codepen: 'https://codepen.io/thiagofranchin/',
      facebook: 'https://www.facebook.com.br/',
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `GSD`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
