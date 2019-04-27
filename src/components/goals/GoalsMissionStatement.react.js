const style = require("../../style/goals.module.css");
const React = require("react");

class GoalsMissionSection extends React.Component<Props> {
  render(): React.Node {
    return (
      <div
        className={style.mission}
        style={{

        }}
      >

          <div className = "container"
            style = {{
              paddingHorizontal: "5%",
              fontSize: 60,
              fontWeight: 350,
              marginBottom: 100,
              lineHeight: 1.2,
            }}

          >
            Our mission is to <span style={{color: "#bb99ff"}}> promote </span> the
            <span style = {{color: "#c266ff"}}> growth </span> of
            <span style = {{color: "#ff8533"}}> recreational </span> and
            <span style = {{color: "#80e5ff"}}> competitive </span> tennis among
            <span style = {{color: "#40bf40"}}> all </span> people of
            <span style = {{color: "#40bf40"}}> all </span> skills levels and
            abilities
          </div>
          <div className = {style.divider}> </div>
      </div>
    );
  }
}

module.exports = GoalsMissionSection;
