/*
 * @flow strict-local
 */

const React = require("react");
const GenericQAComponent = require("../contact/GenericQAComponent.react");
const { QAData } = require("./QAData");
const { FaFacebookSquare, FaEnvelope } = require("react-icons/fa");
const GenericGradientButton = require("../../components/GenericGradientButton.react");

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
          <div className={"col-12 col-md-9"}>
            {QAs}
            <div className="" style={{ marginTop: 130 }}>
              <div style={{ fontSize: 23, fontWeight: 300 }}>
                Still need help?
              </div>
              <div style={{ fontSize: 15, marginTop: 20 }}>
                Email us and one of the officers will answer your questions.
              </div>
              <div style={{ marginTop: 20 }}>
                <GenericGradientButton
                  site="mailto:huskytennis@gmail.com"
                  width={205}
                  redirect={false}
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
                <div style={{ fontSize: 15, marginTop: 30 }}>
                  Or join our Facebook group!
                </div>
                <div style={{ marginTop: 20 }}>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = TopHelpSection;
