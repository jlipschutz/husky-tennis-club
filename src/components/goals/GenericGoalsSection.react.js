import type { GoalSection } from "../constants";

const style = require("../../style/index.module.css");
const React = require("react");

type Props = {
  goalSection: GoalSection,
};

class GenericGoalsSection extends React.Component<Props> {
  render(): React.Node {
    return (
      <div className = "container">
        <div className = "row">
          <span style = {{color: this.props.goalSection.titleColor}}> {this.props.goalSection.title} </span>
          Tennis
        </div>
        <div className = "row">
          <div className = "col-12 col-md-4">
            {this.props.goalSection.picture()}
          </div>
          <div className = "col-12 col-md-8">
            {this.props.goalSection.description}
          </div>
        </div>
      </div>
    )
  }
}

module.exports = GenericGoalsSection;
