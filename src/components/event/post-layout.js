/*
 * @flow strict-local
 */

import "bootstrap/dist/css/bootstrap.min.css";
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import CustomNavbar from "../navbar/navbar.react";

const React = require("react");
const GenericHeader = require("../GenericHeader.react");
const {graphql} = require('gatsby');
const GenericGradientButton = require('../GenericGradientButton.react');
const { MdPersonPin } = require("react-icons/md");
const GenericFooter = require("../../components/GenericFooter.react");


export default ({data}: any) => {
  const mddata = data.mdx.frontmatter;
  return (
    <div>
      <CustomNavbar selected="events" />
      <GenericHeader>Events</GenericHeader>
      <div style={{ height: 30 }} />
      <div className="container">
        <div style={{marginBottom: 40}}>
          <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
        </div>
        <GenericGradientButton site={mddata.registerLink}>
          <span
            style={{
              display: "inline-block",
              fontSize: 16,
              marginRight: 7
            }}
          >
            <MdPersonPin />
          </span>
          Register
        </GenericGradientButton>
      </div>
      <GenericFooter color="#144788" />
    </div>
  )
}

export const pagequery = graphql`query ($postRoute: String!) {
        mdx(fields: {route: {eq: $postRoute}}){
                frontmatter{
                    title
                    date
                    registerBy
                    cityDesc
                    fee
                    dateMonth
                    dateYear
                    dateDayStart
                    dateDayEnd
                    isTravel
                    registerLink
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
