module.exports = {
    siteMetadata: {
        title: "Pipefy",
        author: "nubelsondev",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#3b5bfd`,
                showSpinner: false,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Pipefy`,
                short_name: `Pipefy`,
                start_url: `/`,
                background_color: `#ecf1f8`,
                theme_color: `#3b5bfd`,
                display: `standalone`,
                icon: `./src/img/pipefy.png`,
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-offline`,
    ],
}
