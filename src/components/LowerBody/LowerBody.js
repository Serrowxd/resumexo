import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import './LowerBody.css';
import img from './no_text.png';

class LowerBody extends Component {
  render() {
    return (
      <div className="lowerB C">
        <Container className="lowerC">
          <Row>
            <Col sm={{ size: 3, offset: 0 }} className="lowerCol">
              <img class="img" src={img} alt="yeet" />
            </Col>
            <Col sm={{ size: 8, offset: 1 }} className="lowerCol lowerR">
              <h1 className="lowerTxt">
                <span> - Kevin Jolley </span>
              </h1>
              <h3> > About Me Here </h3>

              <h1>
                This page is still in developement, so I will be adding and
                modifying things daily!
              </h1>
              <h4>Sorry about the Phone layout, that's a work in progress!</h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LowerBody;
