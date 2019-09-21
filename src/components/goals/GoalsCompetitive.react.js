const style = require("../../style/goals.module.css");
const React = require("react");

class GoalsCompetitiveSection extends React.Component<Props> {
    render(): React.Node {
      return (
        <div
          className={style.content}
        >
          <div className = "container"
            style = {{
              padding: "1em",
              fontSize: "5em"
            }}
          >
            <br />
            <span style = {{color: "#AEDDFD"}}> competitive </span> tennis
            <br />
            <img src={require("../../images/competitive.png")}
              alt = "2018 Nationals Team"
              align = "left"
              style = {{paddingLeft: "5%", paddingRight: "5%"}}/>
            <div className = "competitiveDescription"
              style = {{
                fontSize: "1em",
                paddingRight: "5%"
              }}
            >
              <br />
              Throughout the last few years, Husky Tennis Club has been
              competitive in the Pacific Northwest Section of USTA's Tennis
              on Campus program.
              <br />
              <br />
              We have placed as finalists in the Pacific Northwest Sectionals
              tournament and have participated in the USTA Tennis on Campus Nationals
              tournament as well. We continue to strive to secure a place on the draw
              at Nationals.
            </div>
          </div>
        </div>
      );
    }
}

module.exports = GoalsCompetitiveSection;