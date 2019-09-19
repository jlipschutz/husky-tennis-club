/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
const React = require("react");
const GenericHeader = require("../components/GenericHeader.react");

type Props = {};

class Blog extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="blog" />
        <GenericHeader>Blog</GenericHeader>
      </div>
    );
  }
}

export default Blog;
