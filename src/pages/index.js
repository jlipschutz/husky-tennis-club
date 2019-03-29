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
const GenericFooter = require("../components/GenericFooter.react");

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
          <GenericFooter color="white" bottom={-1185} />
        </div>
      </div>
    );
  }
}

export default Index;
