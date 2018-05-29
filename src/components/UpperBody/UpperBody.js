import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import './UpperBody.css';

class UpperBody extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="upperBody C">
            <Col className="whatDoCol">
              <h1 className="whatDo"> What I do </h1>
              <h4 className="whatDoT">
                <span>Languages</span>
              </h4>
              <p className="whatDoP">JavaScript, C, HTML5, CSS3, Markdown</p>
              <h4 className="whatDoT">
                <span>Front-End</span>
              </h4>
              <p className="whatDoP">
                React, Redux, Ember, Bootstrap, Vue, JQuery, React Native,
                Electron
              </p>
              <h4 className="whatDoT">
                <span>Back-End</span>
              </h4>
              <p className="whatDoP">NodeJS, APIs, MongoDB, Passport</p>
              <h4 className="whatDoT">
                <span>Deployment</span>
              </h4>
              <p className="whatDoP"> Heroku, Firebase, Netlify, mLab </p>
            </Col>
            <Col sm={{ size: 5, offset: 0 }}>
              <h1 className="whatDo upperL"> Follow Me </h1>
              <Col sm={{ size: 'auto', offset: 5 }} className="colLink">
                <a
                  href="https://github.com/Serrowxd"
                  target="_blank"
                  className="whatDoT upperF"
                >
                  Github
                </a>
              </Col>
              <Col sm={{ size: 'auto', offset: 5 }} className="colLink">
                <a
                  href="https://www.linkedin.com/in/kevin-jolley-26b600141/"
                  target="_blank"
                  className="whatDoT upperF"
                >
                  LinkedIn
                </a>
              </Col>
              <Col sm={{ size: 'auto', offset: 5 }} className="colLink">
                <a
                  href="https://www.instagram.com/serrowxd"
                  target="_blank"
                  className="whatDoT upperF"
                >
                  Instagram
                </a>
              </Col>
              <Col sm={{ size: 'auto', offset: 5 }} className="colLink">
                <a
                  href="https://twitter.com/Serrowxd"
                  target="_blank"
                  className="whatDoT upperF"
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
