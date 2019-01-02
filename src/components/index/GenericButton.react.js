/*
 * @flow strict-local
 */
import type { SiteTab } from "../constants";

const style = require("../../style/index.module.css");
const React = require("react");
const { Link } = require("gatsby");
const { Button } = require("reactstrap");

type Props = {
  siteTab: SiteTab,
  color: string,
  transparent?: boolean,
  children?: React.Node
};

function SolidButton(props: {
  color: string,
  children?: React.Node
}): React.Node {
  return (
    <Button
      className={style.buttonCustom}
      style={{
        backgroundColor: props.color,
        color: "rgba(255,255,255,0.8)",
        borderStyle: "none"
      }}
    >
      {props.children}
    </Button>
  );
}

function TransparentButton(props: {
  color: string,
  children?: React.Node
}): React.Node {
  return (
    <Button
      className={style.buttonCustom + " " + style.buttonTransparent}
      style={{
        marginLeft: 29,
        borderColor: props.color,
        borderWidth: "2px",
        color: props.color
      }}
      outline
    >
      {props.children}
    </Button>
  );
}

class GenericButton extends React.Component<Props> {
  render(): React.Node {
    return (
      <Link to={"/" + this.props.siteTab + "/"}>
        {this.props.transparent === true ? (
          <TransparentButton color={this.props.color}>
            {this.props.children}
          </TransparentButton>
        ) : (
          <SolidButton color={this.props.color}>
            {this.props.children}
          </SolidButton>
        )}
      </Link>
    );
  }
}

module.exports = GenericButton;
