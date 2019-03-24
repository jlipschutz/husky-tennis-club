const style = require("../../style/goals.module.css");
const React = require("react");

class GoalsFooterSection extends React.Component<Props> {
    render(): React.Node {
      return (
        <footer className = "footer text-center">
          <div
          className = {style.content}
          style = {{
            position: "relative",
            top: 50,
            left: 0,
            bottom: 0,
            right: 0,
            textAlign: "center"
          }}
          >
            <span style = {{color: "#99e6ff"}}>
            Copyright © 2019 Husky Tennis Club. All rights reserved.
            </span>
          </div>
        </footer>
      );
    }
}

module.exports = GoalsFooterSection;
