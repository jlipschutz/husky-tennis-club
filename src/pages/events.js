/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
const React = require("react");
require("../style/event.module.css");
const GenericHeader = require("../components/GenericHeader.react");

type Props = {};

class Events extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="events" />
        <GenericHeader>Events</GenericHeader>
      </div>
    );
  }
}

export default Events;
