/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
const React = require("react");

type Props = {};

class Contact extends React.Component<Props> {
  getStyle = () => {
    return {
      marginTop: '70px',
      marginLeft: '20px'
    }
  }
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="contact" />
        <div style={this.getStyle()}>
          <h1> Contact Us </h1>
        </div>
      </div >
    );
  }
}

export default Contact;
