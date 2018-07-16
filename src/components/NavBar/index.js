import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import {
  Row,
  Col
} from 'reactstrap';
class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return ( <
      Col >
      <
      Navbar dark expand = "sm"
      color = "dark" >
      <
      NavbarBrand href = "/" > reactstrap < /NavbarBrand> <
      NavbarToggler onClick = {
        this.toggle
      }
      /> <
      Collapse isOpen = {
        this.state.isOpen
      }
      navbar >
      <
      Nav className = "ml-auto"
      navbar >
      <
      NavItem >
      <
      NavLink href = "/components/" > Components < /NavLink> <
      /NavItem> <
      NavItem >
      <
      NavLink href = "https://github.com/reactstrap/reactstrap" >
      GitHub <
      /NavLink> <
      /NavItem>

      <
      UncontrolledDropdown nav inNavbar >
      <
      DropdownToggle nav caret >
      Options <
      /DropdownToggle>

      <
      DropdownMenu right >
      <
      DropdownItem header > The Options < /DropdownItem> <
      DropdownItem > Logistics < /DropdownItem> <
      DropdownItem disabled > Shipping < /DropdownItem> <
      DropdownItem divider / >
      <
      DropdownItem > Reset < /DropdownItem> <
      /DropdownMenu> <
      /UncontrolledDropdown> <
      /Nav> <
      /Collapse> <
      /Navbar> <
      /Col>
    );
  }
}

export default NavBar;