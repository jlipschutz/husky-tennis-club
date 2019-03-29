/*
 * @flow strict-local
 */
import type { SiteTab } from "./constants";

const style = require("../style/index.module.css");
const React = require("react");
const { Button } = require("reactstrap");

type Props = {
  site: string,
  marginLeft?: number,
  width?: number,
  children?: React.Node
};

function SolidButton(props: {
  marginLeft?: number,
  width?: number,
  children?: React.Node
}): React.Node {
  return (
    <Button
      className={style.buttonCustom}
      style={{
        background: "linear-gradient(90deg, #F27A54 0%, #A154F2 100%)",
        borderRadius: "20px",
        color: "rgba(255,255,255,0.8)",
        borderStyle: "none",
        fontSize: 10,
        fontWeight: "bold",
        fontFamily: '"Montserrat"',
        marginLeft: props.marginLeft !== null ? props.marginLeft : 0,
        width: props.width !== null ? props.width : undefined
      }}
    >
      {props.children}
    </Button>
  );
}

class GenericButton extends React.Component<Props> {
  render(): React.Node {
    return (
      <a href={this.props.site} target="_blank">
        <SolidButton
          marginLeft={this.props.marginLeft}
          width={this.props.width}
        >
          {this.props.children}
        </SolidButton>
      </a>
    );
  }
}

module.exports = GenericButton;
