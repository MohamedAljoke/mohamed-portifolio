import React from 'react';
import { CardBody, CardText } from 'reactstrap';

export default function Projeto({ projeto }) {
  return (
    <CardBody>
      <h2>{projeto.titulo}</h2>
      <CardText className="project-descricao">
        {projeto.descricaoCurta}
      </CardText>
      <div className="product-img-container">
        <a
          href={projeto.link}
          rel="noreferrer"
          target="_blank"
          title={projeto.titulo}
        >
          <img src={projeto.img} className="project-image" />
        </a>
      </div>
    </CardBody>
  );
}
