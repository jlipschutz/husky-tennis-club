import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const CourtImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "tenniscourt.jpg" }) {
          childImageSharp {
            fixed(height: 2366, cropFocus: NORTHWEST) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        className="courtPic courtOverlay"
        imgStyle={{ objectPosition: "0 0" }}
        style={{ width: "100%" }}
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
    )}
  />
);

export default CourtImage;
