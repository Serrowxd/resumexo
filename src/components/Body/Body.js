import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import img from './149j18.jpg';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="">
        <Jumbotron fluid className="bodyH">
          <Container fluid>
            <h1 className="display-2">Projects</h1>
            <div>
              {/* <img class="img" src={img} alt="if I had any.. :(" /> */}
              <h1 className="soonToBe"> Coming Soon! </h1>
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Body;
