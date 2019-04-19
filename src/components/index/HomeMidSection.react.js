/*
 * @flow strict-local
 */
import Burgers from "../../components/images/burgers";
import Nationals from "../../components/images/nationals";
const style = require("../../style/index.module.css");
const React = require("react");
const GenericButton = require("../index/GenericButton.react");

type Props = {};

class HomeMidSection extends React.Component<Props> {
  render(): React.Node {
    return (
      <div
        className={style.content}
        style={{
          position: "absolute",
          top: 1050,
          color: "rgba(255,255,255,0.9)",
          width: "100%",
          fontSize: 13
        }}
      >
        <div className={"container"}>
          <div className="row">
            <div
              className="col-sm-12 col-lg-6"
              style={{ margin: "auto", width: "80%" }}
            >
              <div className="row">
                <div
                  className="col-md-6 col-lg-12 d-none d-md-block"
                  style={{ marginBottom: 20 }}
                >
                  <Burgers />
                </div>
                <div
                  className="col-sm-12 col-md-6 col-lg-12"
                  style={{ marginBottom: 20 }}
                >
                  <Nationals />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 d-flex align-items-center">
              <div>
                <div className="row justify-content-start">
                  <div
                    className="col-12"
                    style={{
                      fontSize: 35,
                      fontWeight: 700,
                      lineHeight: 1.2
                    }}
                  >
                    Eat Burgers &amp; Play, or Travel &amp; Compete
                  </div>
                </div>
                <div className="row justify-content-start">
                  <div className="col-12" style={{ marginTop: 40 }}>
                    Members attend non-required practices on Monday, Wednesday,
                    and Thursday from 5pm to 8pm at the IMA. The club holds four
                    outdoor courts exclusively for Husky Tennis Club members.
                    The club also holds events like Mixed Doubles BBQ.
                  </div>
                </div>
                <div className="row justify-content-start">
                  <div className="col-12" style={{ marginTop: 15 }}>
                    Members tryout to compete against Universities arond the
                    Pacific Northwest, qualify for Nationals and compete against
                    Universities all across the nation.
                  </div>
                </div>
                <div
                  className="row justify-content-start"
                  style={{ marginTop: 20 }}
                >
                  <div className="col-12">
                    <GenericButton
                      siteTab="events"
                      color="rgba(200, 213, 242)"
                      transparent={true}
                      width={190}
                    >
                      Discover Events
                    </GenericButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMidSection;
