/*
 * @flow strict-local
 */
const React = require("react");

type Props = {
  bottom?: number, // allows for hacky footers
  color?: string
};

class GenericFooter extends React.Component<Props> {
  render(): React.Node {
    return (
      <div
        style={{
          position: "absolute",
          bottom: this.props.bottom == undefined ? 0 : this.props.bottom,
          width: "100%",
          height: 35,
          fontSize: 11,
          color: this.props.color == undefined ? "#144788" : this.props.color,
          textAlign: "center",
          zIndex: 3
        }}
      >
        <p>Made with &#10084; by Husky Tennis Club Web Dev Team</p>
      </div>
    );
  }
}

module.exports = GenericFooter;
