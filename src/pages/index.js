/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../style/index.module.css";
import CourtImage from "../components/images/court";
import CustomNavbar from "../components/navbar/navbar.react";
const React = require("react");

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
      </div>
    );
  }
}

export default Index;
