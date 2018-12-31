/*
 * @flow strict-local
 */
const React = require("react");

type Props = {};

class HomeSectionGeneric extends React.Component<Props> {
  render(): React.Node {
    return (
      <div
        className="container"
        style={{
          position: "absolute",
          top: 190,
          left: 0,
          paddingLeft: "calc(7% - 8px)",
          width: "100%",
          zIndex: 2,
          color: "black"
        }}
      >
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
          <div className="col-md-6" style={{ marginTop: 40 }}>
            Husky Tennis Club welcomes recreational and competitive tennis among
            all peoples of all skill levels and abilities at the University of
            Washington.
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-md-6" style={{ marginTop: 15 }}>
            Members get opportunities to tryout and attend tourneys against
            other University through the USTA Tennis on Campus program.
          </div>
        </div>
      </div>
    );
  }
}

module.exports = HomeSectionGeneric;
