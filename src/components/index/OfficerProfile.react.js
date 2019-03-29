const React = require("react");
const OfficerData = require("../../simple_data/officer_info");

type Props = { id: OfficerId, children?: React.Node };

class OfficerProfile extends React.Component<Props> {
  render(): React.Node {
    return (
      <div
        style={{
          width: "100%",
          height: 228,
          marginTop: 37,
          textAlign: "center",
          fontSize: 11
        }}
      >
        {this.props.children}
        <div style={{ marginTop: 18, fontWeight: "bold", fontSize: 14 }}>
          {OfficerData[this.props.id].name}
        </div>
        <div>{OfficerData[this.props.id].position}</div>
        <div>{OfficerData[this.props.id].label}</div>
      </div>
    );
  }
}

module.exports = OfficerProfile;
