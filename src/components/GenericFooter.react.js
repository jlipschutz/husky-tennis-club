/*
 * @flow strict-local
 */
const React = require("react");

type Props = {
  color?: string
};

class GenericFooter extends React.Component<Props> {
  render(): React.Node {
    return (
      <div
        style={{
          width: "100%",
          height: "250px",
          paddingTop: "213px",
          fontSize: 11,
          color: this.props.color === undefined ? "#144788" : this.props.color,
          textAlign: "center",
          zIndex: -1
        }}
      >
        <p>Made with &#10084; by Husky Tennis Club Web Dev Team</p>
      </div>
    );
  }
}

module.exports = GenericFooter;
