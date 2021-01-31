import React from "react";
import { Card } from "react-bootstrap";

function CardItem(prob) {
  return (
    <div className="col-lg">
      <Card id="_card">
        <Card.Img variant="top" src={prob.item.image} />
        <Card.Body>
          <Card.Title>{prob.item.title}</Card.Title>
          <Card.Text>{prob.item.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardItem;
