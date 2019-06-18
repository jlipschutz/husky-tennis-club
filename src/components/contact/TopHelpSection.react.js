/*
 * @flow strict-local
 */

const React = require("react");
const GenericQAComponent = require("../contact/GenericQAComponent.react");
const { QAData } = require("./QAData");

type Props = {
  children?: React.Node
};

class TopHelpSection extends React.Component<Props> {
  render(): React.Node {
    console.log(QAData);
    const QAs = [];
    QAData.data.forEach(function(d) {
      QAs.push(<GenericQAComponent data={d} />);
    });
    return (
      <div className={"container"} style={{ marginTop: "40px" }}>
        <div className={"row"}>
          <div
            className={"col col-12 col-md-3 leftText"}
            style={{
              fontWeight: 600,
              fontSize: 28,
              color: "rgba(116,122,255,.7)",
              marginBottom: 20,
              lineHeight: 1.4
            }}
          >
            How can we help?
          </div>
          <div className={"col-12 col-md-9"}>{QAs}</div>
        </div>
      </div>
    );
  }
}

module.exports = TopHelpSection;
