/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
const React = require("react");
require("../style/contact.module.css");
const GenericHeader = require("../components/GenericHeader.react");
const GenericFooter = require("../components/GenericFooter.react");
const TopHelpSection = require("../components/contact/TopHelpSection.react");
const { FaFacebookSquare, FaEnvelope } = require("react-icons/fa");
const GenericGradientButton = require("../components/GenericGradientButton.react");

type Props = {};

class Contact extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="contact" />
        <GenericHeader>Contact Us</GenericHeader>
        <TopHelpSection />
        <div style={{ marginTop: 250, marginLeft: 230 }}>
          <h3>Still need help?</h3>
          <div style={{ fontSize: 20, marginTop: 15 }}>
            Email us and one of the officers will answer your questions.
          </div>
          <div style={{ marginTop: 15 }}>
            <GenericGradientButton
              site="https://mailman13.u.washington.edu/mailman/listinfo/huskytennis"
              width={205}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: 16,
                  marginRight: 18
                }}
              >
                <FaEnvelope />
              </span>
              EMAIL
            </GenericGradientButton>
          </div>
          <div style={{ fontSize: 20, marginTop: 50 }}>
            Join our Facebook group!
          </div>
          <div style={{ marginTop: 15 }}>
            <GenericGradientButton
              site="https://www.facebook.com/groups/huskytennisclub/"
              width={205}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: 16,
                  marginRight: 18
                }}
              >
                <FaFacebookSquare />
              </span>
              FACEBOOK GROUP
            </GenericGradientButton>
          </div>
        </div>
        <GenericFooter color="#144788" bottom={-300} />
      </div>
    );
  }
}

export default Contact;
