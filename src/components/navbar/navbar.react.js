/*
 * @flow strict-local
 */
const React = require("react");
const { Link } = require("gatsby");
const {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} = require("reactstrap");

export type SiteTab = "goals" | "blog" | "events" | "contact" | "register";

const SiteTabValue = {
  goals: "Goals",
  blog: "Blog",
  events: "Events",
  contact: "Contact Us",
  register: "Register"
};

function CustomNavItem(props: {
  selected?: SiteTab,
  siteTab: SiteTab
}): React.Node {
  const color =
    props.siteTab === "register" ? "rgba(62, 34, 3, 0.82)" : "black";
  return (
    <NavItem>
      <NavLink>
        <Link
          to={"/" + props.siteTab + "/"}
          style={{
            color:
              props.selected === props.siteTab ? "rgba(70, 78, 255)" : color,
            fontSize: 14,
            fontWeight: "normal",
            textDecoration: "none"
          }}
        >
          {SiteTabValue[props.siteTab]}
        </Link>
      </NavLink>
    </NavItem>
  );
}

type Props = {
  selected?: SiteTab
};

type State = {
  isOpen: boolean
};

class CustomNavbar extends React.Component<Props, State> {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render(): React.Node {
    return (
      <Navbar
        light
        expand="sm"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 3
        }}
      >
        <NavbarBrand>
          <Link
            to="/"
            style={{
              color: "black",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none"
            }}
          >
            Husky Tennis Club
          </Link>
        </NavbarBrand>
        <NavbarToggler
          onClick={this.toggle}
          style={{ border: "none", outline: "none" }}
        />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <CustomNavItem selected={this.props.selected} siteTab="goals" />
            <CustomNavItem selected={this.props.selected} siteTab="blog" />
            <CustomNavItem selected={this.props.selected} siteTab="events" />
            <CustomNavItem selected={this.props.selected} siteTab="contact" />
            <CustomNavItem selected={this.props.selected} siteTab="register" />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
