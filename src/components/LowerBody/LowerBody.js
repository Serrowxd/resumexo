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
            <Col sm={{ size: 3, offset: 0 }} className="lowerCol hid">
              <img class="img" src={img} alt="shaprint" />
            </Col>
            <Col sm={{ size: 9, offset: 0 }} className="lowerCol lowerR">
              <h1 className="lowerTxt">
                <span> - Kevin Jolley </span>
              </h1>
              <h4 className="lowh">
                I have worked with computers my entire life, dating back to my
                first experience at the age of 3 when I played Doom on a Windows
                '95 computer in my Grandpa's office, all the way up to current
                where I'm pulling 38 hour stints behind a computer screen. I
                always go at 100%, anything less is a waste of energy.
              </h4>

              <h4 className="lowhh">
                My achievements in the technology industry are numerable - from
                gaming to the real world;
              </h4>
              <ul>
                <li className="lowList">
                  {' '}
                  Top 10 Gross Sales in Texas | T-Mobile - 2014{' '}
                </li>
                <li className="lowList">
                  {' '}
                  Tournament-level Elementalist | Guild Wars 2 - 2015{' '}
                </li>
                <li className="lowList">
                  {' '}
                  Top 50 World Feral Druid | World of Warcraft - 2017{' '}
                </li>
                <li className="lowList">
                  Master of Computers, and all things that may not work |
                  Grandmother - 1998
                </li>
                <li className="lowList">
                  {' '}
                  "Ok, but how did you do that?" | Mother - 2002{' '}
                </li>
              </ul>
              <h4 className="lowhh">
                Though I only started my quest into the world of code, I hit the
                ground running and haven't let up since.
              </h4>
              <h4 className="lowQuote">
                <span>
                  “The clock is running. Make the most of today. Time waits for
                  no man. Yesterday is history. Tomorrow is a mystery. Today is
                  a gift. That's why it is called the present.” - Alice Morse
                  Earle
                </span>
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LowerBody;
