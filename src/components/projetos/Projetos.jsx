import React from 'react';
import { projetos } from '../../data/projects';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from 'reactstrap';

export default function Projetos({ isDark }) {
  const choosenTextColor = {
    color: `${isDark ? 'white' : 'black'}`,
    paddingTop: '120px',
  };

  return (
    <section style={choosenTextColor}>
      {projetos.map((projeto) => {
        return (
          <Card>
            <CardBody>
              <h2>{projeto.titulo}</h2>
              <CardText className="text-danger">{projeto.descricao}</CardText>
              <img src={projeto.img}></img>
            </CardBody>
          </Card>
        );
      })}
    </section>
  );
}
