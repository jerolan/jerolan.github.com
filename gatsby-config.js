module.exports = {
  siteMetadata: {
    title: '『夢工場ドキドキパニック』'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-jsx',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-64555470-7",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  ]
}
