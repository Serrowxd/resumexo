import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="headerB">
        <Jumbotron fluid className="headerH">
          <Container fluid>
            <h1 className="display-1">Kevin Jolley</h1>
            <p className="display-4">
              JavaScript Fanatic, Front-End Developer, Avid Writer
            </p>
            <p className="bottomQuote">
              <span>
                "I always get to where I'm going by walking away from where I've
                been"
              </span>
            </p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
