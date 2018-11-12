module.exports = {
  siteMetadata: {
    title: 'NyúzoSCH',
    language: 'hu',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
  ],
};
