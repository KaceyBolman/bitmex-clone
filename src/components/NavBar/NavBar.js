import React from 'react';
import { Link } from 'react-router-dom';
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

import { Row, Col } from 'reactstrap';

type MyState = { isOpen: boolean };
class NavBar extends React.Component<{}, MyState> {
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
    return (
      <Col>
        <Navbar dark expand="sm" color="dark">
          <NavbarBrand href="/"> Players </NavbarBrand> <NavbarToggler onClick={this.toggle} />{' '}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/symbols">Select Symbols</Link>
                </NavLink>
              </NavItem>{' '}
              <NavItem>
                <NavLink>
                  <Link to="/layout">Layout</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/player">Player</Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Links{' '}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header> The Options </DropdownItem>{' '}
                  <DropdownItem>
                    <NavItem>
                      <Link to="/quicknavicons">Bitmex Top Bar Replica</Link>
                    </NavItem>
                  </DropdownItem>{' '}
                  <DropdownItem>
                    <NavItem>
                      <Link to="/localstorage">Local Storage Example</Link>
                    </NavItem>
                  </DropdownItem>{' '}
                  <DropdownItem disabled> Disabled </DropdownItem> <DropdownItem divider />
                  <DropdownItem> Reset </DropdownItem>{' '}
                </DropdownMenu>{' '}
              </UncontrolledDropdown>{' '}
            </Nav>{' '}
          </Collapse>{' '}
        </Navbar>{' '}
      </Col>
    );
  }
}

export default NavBar;
