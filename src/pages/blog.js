/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
const React = require("react");
const CustomNavbar = require("../components/navbar/navbar.react");

type Props = {};

class Blog extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="blog" />
      </div>
    );
  }
}

export default Blog;
