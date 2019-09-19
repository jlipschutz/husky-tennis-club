/*
 * @flow strict-local
 */
import CourtImage from "../components/images/court";
import HomeMidSection from "../components/index/HomeMidSection.react";
import OfficerSection from "../components/index/OfficerSection.react";
require("bootstrap/dist/css/bootstrap.min.css");
const styles = require("../style/index.module.css");
const React = require("react");
const CustomNavbar = require("../components/navbar/navbar.react");
const HomeTopSection = require("../components/index/HomeTopSection.react");
const HomeStayInTouchSection = require("../components/index/HomeStayInTouchSection.react");

type Props = {};

class Index extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar />
        <div className={styles.courtContainer}>
          <CourtImage />
          <div className={styles.courtOverlay} />
          <HomeTopSection />
          <HomeMidSection />
          <OfficerSection />
          <HomeStayInTouchSection />
          <div
            style={{
              position: "absolute",
              bottom: -1185,
              width: "100%",
              height: 35,
              fontSize: 11,
              color: "white",
              textAlign: "center",
              zIndex: 3
            }}
          >
            <p>Made with &#10084; by Husky Tennis Club Web Dev Team</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
