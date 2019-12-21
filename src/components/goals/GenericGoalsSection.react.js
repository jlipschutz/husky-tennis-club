import type { GoalSection } from "../constants";

const React = require("react");

type Props = {
  goalSection: GoalSection,
};

class GenericGoalsSection extends React.Component<Props> {
  render(): React.Node {
    return (
      <div className = "container" style={{ paddingBottom: "1em" }}>
        <div className = "row" style={{ fontSize: "2.5em" }}>
          <div className = "subtitle" style = {{color: this.props.goalSection.titleColor, display:
          'inline-block'}}> {this.props.goalSection.title}</div>
        {'\u00A0tennis'}
        </div>
        <div className = "row">
          <div className = "col-12 col-md-4" style= {{ padding: '1em', fontSize: "1em"}}>
            {this.props.goalSection.picture()}
          </div>
          <div className = "col-12 col-md-8" style={{ padding: '2em', fontSize: "1em" }}>
            {this.props.goalSection.description}
          </div>
        </div>
      </div>
    )
  }
}

module.exports = GenericGoalsSection;
