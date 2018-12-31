/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
const React = require("react");

type Props = {};

class Events extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="events" />
      </div>
    );
  }
}

export default Events;
