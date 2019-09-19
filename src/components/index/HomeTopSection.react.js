/*
 * @flow strict-local
 */
const style = require("../../style/index.module.css");
const React = require("react");
const GenericButton = require("../index/GenericButton.react");

type Props = {};

class HomeSectionGeneric extends React.Component<Props> {
  render(): React.Node {
    return (
      <div
        className={style.content}
        style={{
          position: "absolute",
          top: 170
        }}
      >
        <div className={"container"} style={{ paddingLeft: "calc(7% - 8px)" }}>
          <div className="row justify-content-start">
            <div
              className="col-6"
              style={{
                fontSize: 62,
                fontWeight: 700,
                lineHeight: 1.2
              }}
            >
              Socialize,
              <br />
              Compete,
              <br />
              Play
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-md-8 col-lg-6" style={{ marginTop: 40 }}>
              Husky Tennis Club welcomes recreational and competitive tennis
              among all peoples of all skill levels and abilities at the
              University of Washington.
            </div>
          </div>
          <div className="row justify-content-start">
            <div className="col-md-8 col-lg-6" style={{ marginTop: 15 }}>
              Members get opportunities to tryout and attend tourneys against
              other University through the USTA Tennis on Campus program.
            </div>
          </div>
          <div className="row justify-content-start" style={{ marginTop: 20 }}>
            <div className="col-sm-8">
              {/*<GenericButton siteTab="register" color="rgba(70, 78, 255)">
                Register
              </GenericButton>
              */}
              <GenericButton
                siteTab="goals"
                color="rgba(70, 78, 255)"
              >
                {/*transparent={true}
                marginLeft={29} */}
                Learn More
              </GenericButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = HomeSectionGeneric;
