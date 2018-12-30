/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
const React = require("react");
const CustomNavbar = require("../components/navbar/navbar.react");

type Props = {};

class Goals extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="goals" />
      </div>
    );
  }
}

export default Goals;
