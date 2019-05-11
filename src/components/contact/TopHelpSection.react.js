/*
 * @flow strict-local
 */

const React = require("react");

type Props = {
  children?: React.Node
};

class TopHelpSection extends React.Component<Props> {
  render(): React.Node {
    return (
      <div>
        <div className={"row"}>
          <div className={"col"}>How can we help?</div>
        </div>
      </div>
    );
  }
}

module.exports = TopHelpSection;
