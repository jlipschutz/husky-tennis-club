/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../style/index.module.css";
import CourtImage from "../components/images/court";
const React = require("react");
const CustomNavbar = require("../components/navbar/navbar.react");

type Props = {};

class Index extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar />
        <div className={styles.courtContainer}>
          <CourtImage />
          <div className={styles.courtOverlay} />
        </div>
        <CourtImage />
      </div>
    );
  }
}

export default Index;
