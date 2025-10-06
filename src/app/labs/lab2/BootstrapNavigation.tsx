"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardImg from "react-bootstrap/CardImg";
import CardText from "react-bootstrap/CardText";
import CardTitle from "react-bootstrap/CardTitle";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

export default function BootstrapTabs() {
  return (
    <div id="wd-css-navigating-with-tabs" style={{ padding: 16 }}>
      <h2>Tabs</h2>

      <Nav variant="tabs" defaultActiveKey="#/Labs/Lab2/Active">
        <NavItem>
          <NavLink href="#/Labs/Lab2/Active">Active</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#/Labs/Lab2/Link1">Link 1</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#/Labs/Lab2/Link2">Link 2</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#/Labs/Lab2/Disabled" disabled>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>

<br></br><br></br>
      <h2> Cards </h2>
  <Card style={{ width: "18rem" }}>
    <CardImg variant="top" src="/images/stacked.jpg" />
    <CardBody>
      <CardTitle>Stacking Starship</CardTitle>
      <CardText>
        Stacking the most powerful rocket in history. Mars or bust!
      </CardText>
      <Button variant="primary">Boldly Go</Button>
    </CardBody>
    </Card>
    
    </div>
  );
}
