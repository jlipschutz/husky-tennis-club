const React = require("react");

type Props = {
  children?: React.Node
};

const divStyle = {
  marginTop: "113px",
  marginLeft: "30px"
};

class GenericHeader extends React.Component<Props> {
  render(): React.Node {
    return (
      <div style={divStyle}>
        <h1 style={{ fontWeight: 200 }}>{this.props.children}</h1>
      </div>
    );
  }
}

module.exports = GenericHeader;
