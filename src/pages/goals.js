/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
const styles = require("../style/goals.module.css");
const React = require("react");
const GoalsMissionStatement = require("../components/goals/GoalsMissionStatement.react");
const GoalsCompetitiveSection = require("../components/goals/GoalsCompetitive.react");
const GoalsRecreationalSection = require("../components/goals/GoalsRecreational.react");
const GoalsFooterSection = require("../components/goals/GoalsFooter.react.js");
type Props = {};

class Goals extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="goals" />
        <div className={styles.content}>
          <GoalsMissionStatement />
          <GoalsCompetitiveSection />
          <GoalsRecreationalSection />
          <div className = {styles.footer}>
            <GoalsFooterSection />
          </div>
        </div>

      </div>
    );
  }
}

export default Goals;
