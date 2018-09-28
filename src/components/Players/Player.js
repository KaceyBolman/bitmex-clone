import React, {Component} from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const Player = ({name}) => (
  <div>
    <Card>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>Card substitle</CardSubtitle>
        <CardText>Card text Card text Card text Card text Card text.</CardText>
        <Button>Click</Button>
      </CardBody>
    </Card>
  </div>
);

export default Player;
