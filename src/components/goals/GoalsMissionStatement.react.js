const style = require("../../style/goals.module.css");
const React = require("react");

class GoalsMissionSection extends React.Component<Props> {
  render(): React.Node {
    return (
      <div
        className={style.content}
        style={{
          position: "relative",
          top: 170,
          textAlign: "center",
        }}
      >

          <div className = "mission"
            style = {{
              textAlign: "center",
              paddingHorizontal: "5%",
              flex: 1,
              fontSize: 70,
              fontWeight: 350,
              lineHeight: 1.2,
            }}

          >
            Our mission is to <span style={{color: "#bb99ff"}}> promote </span> the
            <span style = {{color: "#c266ff"}}> growth </span> of
            <span style = {{color: "#ff8533"}}> recreational </span> and
            <span style = {{color: "#80e5ff"}}> competetive </span> tennis among
            <span style = {{color: "#40bf40"}}> all </span> peoples of
            <span style = {{color: "#40bf40"}}> all </span> skill levels and
            abilities
          </div>
      </div>
    );
  }
}

module.exports = GoalsMissionSection;
