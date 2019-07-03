const style = require("../../style/goals.module.css");
const React = require("react");

class GoalsMissionSection extends React.Component<Props> {
  render(): React.Node {
    return (
      <div
        className={style.mission}>
        <div className = "container"
          style = {{
            paddingHorizontal: "10%",
            fontSize: "2.5em",
            marginBottom: 100,
            lineHeight: 1.2,
            maxWidth: "70%"
          }}
        >
            Our mission is to <span style={{color: "#AFA5BD"}}> promote </span> the
            <span style = {{color: "#728CB4"}}> growth </span> of
            <span style = {{color: "#CA9E86"}}> recreational </span> and
            <span style = {{color: "#AEDDFD"}}> competitive </span> tennis among
            <span style = {{color: "#6A854F"}}> all </span> people of
            <span style = {{color: "#6A854F"}}> all </span> skills levels and
            abilities
          </div>
      </div>
    );
  }
}

module.exports = GoalsMissionSection;
