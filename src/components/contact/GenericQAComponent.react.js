/*
 * @flow strict-local
 */

import type { QAType } from "./QAData";
const React = require("react");
const stylesContact = require("../../style/contact.module.css");
const { IoIosArrowDown } = require("react-icons/io");

type Props = {
  data: QAType
};

type State = {
  isAnswerDisplayed: boolean
};

class GenericQAComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isAnswerDisplayed: false };
  }

  handleTitleClick = (e: Event): void => {
    this.setState({ isAnswerDisplayed: !this.state.isAnswerDisplayed });
  };

  render(): React.Node {
    console.log(this.props.data);
    return (
      <div className={stylesContact.cardStyle}>
        <div className="card" style={{ border: "none" }}>
          <div className="card-body" onClick={this.handleTitleClick}>
            <div
              className="card-title d-flex justify-content-between"
              style={{
                marginBottom: 0,
                fontWeight: 300,
                fontSize: 14,
                color: "#1F2041"
              }}
            >
              <div>{this.props.data.question}</div>
              <div>
                <IoIosArrowDown
                  style={{
                    color: "#9CA0FD",
                    transform: this.state.isAnswerDisplayed
                      ? "rotate(180deg)"
                      : "none"
                  }}
                />
              </div>
            </div>
            <div
              className="card-text"
              style={{
                display: this.state.isAnswerDisplayed ? "block" : "none",
                marginTop: 25,
                fontSize: 14,
                opacity: 0.85
              }}
            >
              {this.props.data.answer}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = GenericQAComponent;
