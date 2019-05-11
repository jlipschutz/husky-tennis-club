/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
const React = require("react");
const GenericHeader = require("../components/GenericHeader.react");
const TopHelpSection = require("../components/contact/TopHelpSection.react");

type Props = {};

class Contact extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="contact" />
        <GenericHeader>Contact Us</GenericHeader>
        <TopHelpSection />
      </div>
    );
  }
}

export default Contact;
