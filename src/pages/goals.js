/*
 * @flow strict-local
 */
import { GoalsSectionData } from "../components/constants";

import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/navbar/navbar.react";
const styles = require("../style/goals.module.css");
const React = require("react");
const GoalsMissionStatement = require("../components/goals/GoalsMissionStatement.react");
const GoalsCompetitiveSection = require("../components/goals/GoalsCompetitive.react");
const GoalsRecreationalSection = require("../components/goals/GoalsRecreational.react");
const GenericFooterSection = require("../components/GenericFooter.react.js");
const GenericGoalsSection = require("../components/goals/GenericGoalsSection.react");

type Props = {};

class Goals extends React.Component<Props> {
  render(): React.Node {
    console.log(GoalsSectionData.recreational.picture);
    return (
      <div>
        <CustomNavbar selected="goals" />
        <div>
        	<GoalsMissionStatement />
          <GenericGoalsSection goalSection = {GoalsSectionData.competitive} />
          <GenericGoalsSection goalSection = {GoalsSectionData.recreational} />
        </div>

      </div>
    );
  }
}

export default Goals;
