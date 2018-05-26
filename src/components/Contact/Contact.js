import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
} from 'reactstrap';

import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <Container className="contactContainer">
        <Row>
          <Col>
            <h1 className="contactTxt">Get ahold of me!</h1>
            <h4 className="contactTxt"> ~ NOT CURRENTLY WORKING ~ </h4>
            <Form>
              <FormGroup>
                <Label for="label" />
                <Input
                  type="email"
                  name="email"
                  id="label"
                  placeholder="Your Name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="label" />
                <Input
                  type="email"
                  name="email"
                  id="label"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="label" />
                <Input
                  type="email"
                  name="email"
                  id="label"
                  placeholder="Phone Number"
                />
              </FormGroup>
              <Button className="contactButton"> Submit </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
