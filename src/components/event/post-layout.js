import Layout from './layout'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import React from "react"

const {graphql} = require('gatsby');

export default ({data}) => {
    return (
        <Layout>
            <div>
                <header>
                    <h1 className="article-title">{data.mdx.frontmatter.title}</h1>
                </header>

                <div>
                  <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
                </div>
            </div>
        </Layout>
    )
}

export const pagequery = graphql`query ($postRoute: String!) {
        mdx(fields: {route: {eq: $postRoute}}){
                frontmatter{
                    title
                }
                fields{
                    route
                }
                rawBody
                internal{
                    content
                }
                code{
                    body
                    scope
                }
        }
    }`
