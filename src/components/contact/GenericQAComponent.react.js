/*
 * @flow strict-local
 */

const React = require("react");

type Props = {
  question: string,
  answer: string
};

class GenericQAComponent extends React.Component<Props> {
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

module.exports = GenericQAComponent;
