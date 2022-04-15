import { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

export default function Packages(props) {
  const [activeItem, setActiveItem] = useState(props.packages[0]);

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Our Packages</Card.Title>
          <Card.Text>
            Check out some of our packages! Every package is ethically sourced
            and organic!
          </Card.Text>
        </Card.Body>
        <ListGroup>
          {props.packages.map((eachPackage, index) => (
            <ListGroup.Item
              key={index}
              active={eachPackage === activeItem}
              onClick={() => setActiveItem(eachPackage)}
            >
              {eachPackage}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
}
