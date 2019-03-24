const style = require("../../style/goals.module.css");
const React = require("react");

class GoalsRecreationalSection extends React.Component<Props> {
    render(): React.Node {
      return (
        <div
          className={style.content}
          style={{
            position: "relative",
            top: 100
          }}
        >
          <div className = "recreational"
            style = {{
              paddingLeft: "5%",
              fontSize: 70,
            }}
          >
            <br />
            <span style = {{color: "#ff8533"}}> recreational </span> tennis
            <br />
            <img src = {require("../../images/recreational.jpg")}
              alt = "Recreational Tennis"
              height = "300"
              width = "600"
              align = "left"
              style = {{paddingLeft: "5%", paddingRight: "5%"}}/>
            <div className = "recreationalDescription"
              style = {{
                fontSize: 20,
                paddingRight: "5%"
              }}
            >
              <br />
              We always welcome new players to come join us and participate in
              the Husky fun. During the beginning of fall quarter we invite all
              interested tennis players to play tennis and meet our
              current officers to learn more about the club.
              <br />
              <br />
              You do not have to be a part of the competitive team to join the
              Husky Tennis Club. Our goal as a club is to provide support and
              maintain a player base for all tennis players competitive
              and recreational.
            </div>
            <br />
          </div>
        </div>
      );
    }
}

module.exports = GoalsRecreationalSection;
