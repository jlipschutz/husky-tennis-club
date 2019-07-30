/*
 * @flow strict-local
 */

import type { EventType } from "./EventType";
const React = require("react");
const stylesContact = require("../../style/event.module.css");

type Props = {
  data: EventType
};

class GenericQAComponent extends React.Component<Props> {
  render(): React.Node {
    return (
      <div className={stylesContact.cardStyle}>
        <div className="card border-0" style={{}}>
          <div
            className="card-header bg-white border-0"
            style={{
              paddingTop: 30,
              paddingBottom: 10,
              textAlign: "center",
              color: this.props.data.isTravel ? "#6FCF97" : "#CF6F6F",
              fontSize: 20
            }}
          >
            <div>
              <i
                className="material-icons"
                style={{
                  fontSize: 35,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "rgba(0,0,0,0.0)",
                  backgroundImage: this.props.data.isTravel
                    ? "linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)"
                    : "linear-gradient(180deg, #CF6F6F 0%, #EAAD66 100%)"
                }}
              >
                {this.props.data.isTravel ? "whatshot" : "mood"}
              </i>
            </div>
            <div style={{ fontWeight: "light", marginTop: -10 }}>
              {this.props.data.name}
            </div>
            <div style={{ fontWeight: "bold", fontSize: 12, color: "#1F2041" }}>
              {this.props.data.cityDesc}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <hr
              style={{
                width: "80%",
                marginTop: 5,
                marginBottom: 0,
                color: "rgba(31, 32, 65, 0.5)"
              }}
            />
          </div>
          <div>
            <div
              className="card-body d-flex justify-content-around"
              style={{
                paddingTop: 0,
                padding: 10,
                fontSize: 9,
                maxWidth: 250,
                margin: "auto",
                fontFamily: "Montserrat",
                color: "rgba(31, 32, 65, 0.5)"
              }}
            >
              <div style={{ marginLeft: -15 }}>
                <i
                  className="material-icons"
                  style={{
                    fontSize: 10,
                    verticalAlign: "text-bottom"
                  }}
                >
                  event
                </i>
                {" Register by " + this.props.data.registerBy}
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Fee: </span>
                {" " + this.props.data.fee}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = GenericQAComponent;
