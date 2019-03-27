const style = require("../../style/goals.module.css");
const React = require("react");

class GoalsMissionSection extends React.Component<Props> {
  render(): React.Node {
    return (
      <div
        className={style.mission}
        style={{
          position: "relative",
          top: 120,
          textAlign: "center",
        }}
      >

          <div className = "mission"
            style = {{
              textAlign: "center",
              paddingHorizontal: "5%",
              flex: 1,
              fontSize: 60,
              fontWeight: 350,
              lineHeight: 1.2,
            }}

          >
            OUR MISSION IS TO <span style={{color: "#bb99ff"}}> PROMOTE </span> THE
            <span style = {{color: "#c266ff"}}> GROWTH </span> OF
            <span style = {{color: "#ff8533"}}> RECREATIONAL </span> AND
            <span style = {{color: "#80e5ff"}}> COMPETITIVE </span> TENNIS AMONG
            <span style = {{color: "#40bf40"}}> ALL </span> PEOPLES OF
            <span style = {{color: "#40bf40"}}> ALL </span> SKILL LEVELS AND
            ABILITIES
          </div>
          <div className = {style.divider}> </div>
      </div>
    );
  }
}

module.exports = GoalsMissionSection;
