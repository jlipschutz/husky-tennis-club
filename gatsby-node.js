/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");
const {createFilePath} = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({node, getNode, actions}) =>{
    const {createNodeField} = actions
    if (node.internal.type === 'Mdx') {
        const route = createFilePath({node, getNode, basePath:'event-pages'})
        createNodeField({
            node,
            name: 'route',
            value: 'events' + route
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `{
            allMdx
            {
                edges {
                    node {
                        fields {
                            route
                        }
                        id
                        parent {
                            ... on File {
                                name
                                sourceInstanceName
                            }
                        }
                        code {
                            scope
                        }
                    }
                }
            }
          }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.route,
            component: componentWithMDXScope(
              path.resolve("./src/components/event/post-layout.js"),
              node.code.scope
            ),
            context: {
                id: node.id,
                postRoute:  node.fields.route
            }
          });
        });
      })
    );
  });
};
