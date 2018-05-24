import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import './UpperBody.css';

class UpperBody extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="upperBody">
            <Col className="whatDoCol">
              <h1 className="whatDo"> What I do </h1>
              <h4 className="whatDoT"> Front-End </h4>
              <p className="whatDoP">
                JavaScript, CSS3, HTML, React, Ember, Bootstrap, Vue
              </p>
              <h4 className="whatDoT"> Back-End </h4>
              <p className="whatDoP"> NodeJS, APIs, MongoDB, Passport </p>
              <h4 className="whatDoT"> Mobile / Apps </h4>
              <p className="whatDoP"> React Native, Electron </p>
              <h4 className="whatDoT"> Deployment </h4>
              <p className="whatDoP"> Heroku, Firebase, Netlify, mLab </p>
            </Col>
            <Col sm={{ size: 5, offset: 0 }}>
              <h1 className="whatDo L"> Follow Me </h1>
              <Col sm={{ size: 'auto', offset: 5 }} className="colLink">
                <a
                  href="twitch.tv/serrowpls"
                  target="_blank"
                  className="whatDoT F"
                >
                  Github
                </a>
              </Col>
              <Col sm={{ size: 'auto', offset: 5 }} className="colLink">
                <a
                  href="twitch.tv/serrowpls"
                  target="_blank"
                  className="whatDoT F"
                >
                  LinkedIn
                </a>
              </Col>
              <Col sm={{ size: 'auto', offset: 5 }} className="colLink">
                <a
                  href="twitch.tv/serrowpls"
                  target="_blank"
                  className="whatDoT F"
                >
                  Twitter
                </a>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UpperBody;
