/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const slugify = require('slugify');

exports.createPages = async({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const result = await graphql(`
   query queryCMSPage {
  allDatoCmsArticle {
    nodes{
      id
      title
        }
      }
    }
  `);



    // Create blog post pages.
    result.data.allDatoCmsArticle.nodes.forEach(edge => {

      const slugifiedTitle = slugify(edge.title,{
        lower:true
      });
      console.log(slugifiedTitle);
      createPage({
        // Path for this page — required
        path: `articles/${slugifiedTitle}`,
        component: blogPostTemplate,
        context: {
          slug: slugifiedTitle, // we put all query data to context
          id: edge.id
        },
      })
    })

}
