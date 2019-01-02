/*
 * @flow strict-local
 */
import CourtImage from "../components/images/court";
require("bootstrap/dist/css/bootstrap.min.css");
const styles = require("../style/index.module.css");
const React = require("react");
const CustomNavbar = require("../components/navbar/navbar.react");
const HomeTopSection = require("../components/index/HomeTopSection.react");

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
        </div>
      </div>
    );
  }
}

export default Index;
