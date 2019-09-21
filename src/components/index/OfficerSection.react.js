/*
 * @flow strict-local
 */
import Kevin from "../../components/images/kevin";
import Brandon from "../../components/images/brandon";
import Brian from "../../components/images/brian";
import Maddie from "../../components/images/maddie";
import Megan from "../../components/images/megan";
import Boris from "../../components/images/boris";
import Jeremy from "../../components/images/jeremy";
import Kimmy from "../../components/images/kimmy";
import Samantha from "../../components/images/samantha";
const style = require("../../style/index.module.css");
const React = require("react");
const GenericButton = require("../index/GenericButton.react");
const OfficerProfile = require("../index/OfficerProfile.react");

type Props = {};

class OfficerSection extends React.Component<Props> {
  render(): React.Node {
    return (
      <div
        className={style.content}
        style={{
          position: "absolute",
          top: 1950,
          color: "rgba(255,255,255,0.9)",
          width: "100%",
          fontSize: 13
        }}
      >
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div
              className="col-md-6"
              style={{
                fontSize: 35,
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 25
              }}
            >
              We make <br /> this all possible
            </div>
            <div
              className="col-md-6 d-flex align-items-center justify-content-md-end"
              style={{ marginBottom: 25 }}
            >
              <GenericButton
                siteTab="blog"
                color="rgba(200, 213, 242)"
                transparent={true}
                width={72}
              >
                Blog
              </GenericButton>
              <GenericButton
                siteTab="contact"
                color="rgba(200, 213, 242)"
                transparent={true}
                marginLeft={26}
                width={129}
              >
                Contact Us
              </GenericButton>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row d-flex justify-content-start">
            <div className="col-6 col-md-3">
              <OfficerProfile id="Jeremy">
                <Jeremy />
              </OfficerProfile>
            </div>
            <div className="col-6 col-md-3">
              <OfficerProfile id="Kimmy">
                <Kimmy />
              </OfficerProfile>
            </div>
          </div>
          <div className="row d-flex justify-content-start">
            <div className="col-6 col-md-3">
              <OfficerProfile id="Kevin">
                <Kevin />
              </OfficerProfile>
            </div>
            <div className="col-6 col-md-3">
              <OfficerProfile id="Samantha">
                <Samantha />
              </OfficerProfile>
            </div>
            <div className="col-6 col-md-3">
              <OfficerProfile id="Maddie">
                <Maddie />
              </OfficerProfile>
            </div>
            <div className="col-6 col-md-3">
              <OfficerProfile id="Boris">
                <Boris />
              </OfficerProfile>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OfficerSection;
