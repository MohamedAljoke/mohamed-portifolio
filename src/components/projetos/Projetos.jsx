import React, { useContext } from 'react';
import { projetos } from '../../data/projects';
import { Card, Row, Col, Container } from 'reactstrap';
import { ThemContext } from '../../context/theme.context';
import Projeto from './Projeto';

export default function Projetos() {
  const { isDark } = useContext(ThemContext);
  const choosenTextColor = {
    color: `${isDark ? 'white' : 'black'}`,
  };

  return (
    <section style={choosenTextColor} className="section">
      <Container>
        <Row>
          {projetos.map((projeto) => {
            return (
              <Col lg={4}>
                <Card className="p-2 m-2 mb-5">
                  <Projeto projeto={projeto} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
