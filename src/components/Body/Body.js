import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="">
        <Jumbotron fluid className="bodyH D">
          <Container fluid>
            <h1 className="display-2">Projects</h1>
            <div>
              <h1 className="soonToBe"> Coming Soon! </h1>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Body;
