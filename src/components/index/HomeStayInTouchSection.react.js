const { FaFacebookSquare, FaBell } = require("react-icons/fa");
const React = require("react");
const style = require("../../style/index.module.css");
const GenericGradientButton = require("../GenericGradientButton.react");

type Props = {};

class HomeStayInTouchSection extends React.Component<Props> {
  render(): React.Node {
    return (
      <div
        className={style.content}
        style={{
          position: "absolute",
          top: 3050,
          color: "rgba(255,255,255,0.9)",
          width: "100%",
          fontSize: 13
        }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div
              style={{
                fontSize: 35,
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 25,
                textAlign: "center"
              }}
            >
              Let's Stay in Touch
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div
              style={{
                fontSize: 11,
                lineHeight: 1.2,
                marginBottom: 100,
                textAlign: "center"
              }}
            >
              Subscribe to our Newsletter or Join our Facebook Group
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="row d-flex justify-content-center">
              <div className={"col-12 col-sm-5 d-flex justify-content-center"}>
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
                    <FaBell />
                  </span>
                  SUBSCRIBE TO EMAIL
                </GenericGradientButton>
              </div>
              <div className={"d-none d-sm-block col-sm-2"} />
              <div
                className={
                  "col-12 col-sm-5  d-flex justify-content-center mt-sm-0 mt-3"
                }
              >
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
    );
  }
}

module.exports = HomeStayInTouchSection;
