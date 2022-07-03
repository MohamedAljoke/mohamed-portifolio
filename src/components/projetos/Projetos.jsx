import React, { useContext } from 'react';
import GithubIcon from 'mdi-react/GithubIcon';
import WebIcon from 'mdi-react/WebIcon';
import { Card, Row, Col, Container } from 'reactstrap';
import { LangContext } from '../../context/lang.context';
import { ThemContext } from '../../context/theme.context';

import Projeto from './Projeto';

export default function Projetos() {
  const { isDark } = useContext(ThemContext);
  const { textObject } = useContext(LangContext);
  const choosenTextColor = {
    color: `${isDark ? 'white' : 'black'}`,
  };

  return (
    <section style={choosenTextColor} className="section">
      <Container>
        <Row>
          {textObject.projetos.map((projeto) => {
            return (
              <Col lg={4}>
                <Card className="p-2 m-2 mb-5 project-card-container">
                  <Projeto projeto={projeto} />
                  <div
                    className="mb-3 "
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}
                  >
                    <a
                      href={projeto.gitHub}
                      rel="noreferrer"
                      target="_blank"
                      title="gitHubLink"
                    >
                      <button>
                        Code <GithubIcon color="black" />
                      </button>
                    </a>
                    {projeto.link && (
                      <a
                        href={projeto.link}
                        rel="noreferrer"
                        target="_blank"
                        title="demo link"
                      >
                        <button>
                          Demo <WebIcon color="black" />
                        </button>
                      </a>
                    )}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {projeto.usedTech}
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
