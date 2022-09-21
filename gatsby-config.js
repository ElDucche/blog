module.exports = {
  siteMetadata: {
    title: `ElDucche's Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: `secret_jkF2Ugn4R9CLu5Ulv59fxGIHI2nnbupLCJ2WBbq80GD`,
        databaseId: `4315c48415b14905be6f7b012fd6d4d8`,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
  ],
}
