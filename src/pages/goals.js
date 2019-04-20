/*
 * @flow strict-local
 */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
const React = require("react");
const GoalsMissionStatement = require("../components/goals/GoalsMissionStatement.react");
const GoalsCompetitiveSection = require("../components/goals/GoalsCompetitive.react");
const GoalsRecreationalSection = require("../components/goals/GoalsRecreational.react");
const GenericFooterSection = require("../components/GenericFooter.react.js")
type Props = {};

class Goals extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <CustomNavbar selected="goals" />
        <div>
        	<div className={"container"}>
        		<GoalsMissionStatement />
        	</div>
          <GoalsCompetitiveSection />
          <GoalsRecreationalSection />
          <GenericFooterSection bottom={-650} />
        </div>

      </div>
    );
  }
}

export default Goals;
