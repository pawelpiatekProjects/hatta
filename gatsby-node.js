/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(`
    query postQuery {
        allMdx {
            nodes {
                frontmatter {
                    title
                    slug
                    author
                  featuredImage {
                    childImageSharp{
                      fluid(maxWidth: 700, maxHeight: 500){
                        src
                      }
                    }
                  }
                }
                excerpt(pruneLength: 50)
            }
        }
}
  `);



    // Create blog post pages.
    result.data.allMdx.nodes.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })

}
