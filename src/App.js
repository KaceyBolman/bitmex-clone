import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main.js';
import { Col, Container, Row } from 'reactstrap';

// RGAPI-e61c0eef-4560-43e2-a18e-d14bfdf3ac0bcurl --request GET 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/RiotSchmick?api_key=<key>' --include

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <NavBar />
        </Row>{' '}
        <Row>
          <Col sm="12">
            <Main />
          </Col>{' '}
        </Row>{' '}
      </Container>
    );
  }
}

export default App;
/*
  REACTSTRAP EXAMPLE
      import React, { Component } from 'react';

      import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        Container,
        Row,
        Col,
        Jumbotron,
        Button
      } from 'reactstrap';
      class App extends Component {
        constructor(props) {
          super(props);

          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          return (
            <div>
              <Navbar color="inverse" inverse toggleable>
                <NavbarToggler right onClick={this.toggle} />
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              <Jumbotron>
                <Container>
                  <Row>
                    <Col>
                      <h1>Welcome to React</h1>
                      <p>
                        <Button
                          tag="a"
                          color="success"
                          size="large"
                          href="http://reactstrap.github.io"
                          target="_blank"
                        >
                          View Reactstrap Docs
                        </Button>
                      </p>
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>
            </div>
          );
        }
      } 
*/
