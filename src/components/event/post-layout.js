import Layout from './layout'
import { graphql} from "gatsby";
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import React from "react"

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

export const pageQuery = graphql`query ($postRoute: String!) {
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
