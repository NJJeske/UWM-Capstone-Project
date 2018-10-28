import React, { Component } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

export class Login extends Component {
  render() {
    return (
      <Container>
        <Form inline>
          <FormGroup bsSize="large">
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
            />
          </FormGroup>{" "}
          <FormGroup bsSize="large">
            <Label for="examplePassword" hidden bsSize="large">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
            />
          </FormGroup>{" "}
          <Button bsSize="large">Login</Button>
        </Form>
      </Container>
    );
  }
}
