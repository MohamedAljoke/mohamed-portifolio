import React from 'react';
import { CardBody, CardText } from 'reactstrap';

export default function Projeto({ projeto }) {
  return (
    <CardBody>
      <h2>{projeto.titulo}</h2>
      <CardText className="text-danger">{projeto.descricao}</CardText>
      <div className="product-img-container">
        <img src={projeto.img} className="project-image" />
      </div>
    </CardBody>
  );
}
