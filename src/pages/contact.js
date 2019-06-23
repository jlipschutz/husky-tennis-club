/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
const React = require("react");
require("../style/contact.module.css");
const genstyle = require("../style/generic.module.css");
const GenericHeader = require("../components/GenericHeader.react");
const GenericFooter = require("../components/GenericFooter.react");
const TopHelpSection = require("../components/contact/TopHelpSection.react");

type Props = {};

class Contact extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <div className={genstyle.wrapper}>
          <CustomNavbar selected="contact" />
          <GenericHeader>Contact Us</GenericHeader>
          <TopHelpSection />
        </div>
        <GenericFooter color="#144788" />
      </div>
    );
  }
}

export default Contact;
