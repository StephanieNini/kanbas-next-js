"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Col, Row } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";

export default function BootstrapForms() {
  return (
    <div id="wd-bootstrap-forms" style={{ padding: 16 }}>
      {/* Dropdowns */}
      <div id="wd-css-styling-dropdowns" style={{ marginBottom: 24 }}>
        <h3>Dropdowns</h3>
        <Form.Select defaultValue="0" style={{ maxWidth: 320 }}>
          <option value="0">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>

      {/* Switches */}
      <div id="wd-css-styling-switches" style={{ marginBottom: 24 }}>
        <h3>Switches</h3>
        <Form.Check type="switch" label="Unchecked switch checkbox" />
        <Form.Check type="switch" defaultChecked label="Checked switch checkbox" />
        <Form.Check type="switch" disabled label="Unchecked disabled switch checkbox" />
        <Form.Check type="switch" defaultChecked disabled label="Checked disabled switch checkbox" />
      </div>

      {/* Range / Slider */}
      <div id="wd-css-styling-range-and-sliders" style={{ marginBottom: 24 }}>
        <h3>Range</h3>
        <Form.Label>Example range</Form.Label>
        <Form.Range min="0" max="5" step="0.5" />
      </div>

      {/* Addons */}
      <div id="wd-css-styling-addons" style={{ marginBottom: 24 }}>
        <h3>Addons</h3>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
          <FormControl />
        </InputGroup>

        <InputGroup>
          <FormControl />
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup>
      </div>

      {/* Responsive Forms 1 */}
      <div id="wd-css-responsive-forms-1" style={{ marginBottom: 24 }}>
        <h3>Responsive forms</h3>
        <Row className="mb-3">
          <Form.Label column sm={2}>Email</Form.Label>
          <Col sm={10}>
            <Form.Control type="email" defaultValue="email@example.com" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={2}>Password</Form.Label>
          <Col sm={10}>
            <Form.Control type="password" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={2}>Bio</Form.Label>
          <Col sm={10}>
            <Form.Control as="textarea" style={{ height: "100px" }} />
          </Col>
        </Row>
      </div>

      {/* Responsive Forms 2 */}
      <div id="wd-css-responsive-forms-2">
        <h3>Responsive forms 2</h3>
        <Form>
          <Row className="mb-3">
            <Form.Label column sm={2}>Email</Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Label column sm={2}>Password</Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Row>

          <fieldset>
            <Row className="mb-3">
              <Form.Label as="legend" column sm={2}>Radios</Form.Label>
              <Col sm={10}>
                <Form.Check type="radio" label="First radio" name="formHorizontalRadios" defaultChecked />
                <Form.Check type="radio" label="Second radio" name="formHorizontalRadios" />
                <Form.Check type="radio" label="Third radio" name="formHorizontalRadios" />
                <Form.Check type="radio" label="Remember me" name="formHorizontalRadios" />
              </Col>
            </Row>
          </fieldset>

          <Col>
            <Button type="submit">Sign in</Button>
          </Col>
        </Form>
      </div>
    </div>
  );
}
