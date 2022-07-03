import images from '../assets/imgs';
import NodejsIcon from 'mdi-react/NodejsIcon';
import DatabaseIcon from 'mdi-react/DatabaseIcon';
import DockerIcon from 'mdi-react/DockerIcon';
import AwsIcon from 'mdi-react/AwsIcon';
import ReactIcon from 'mdi-react/ReactIcon';
import FirebaseIcon from 'mdi-react/FirebaseIcon';
import LoginIcon from 'mdi-react/LoginIcon';
import LanguageTypescriptIcon from 'mdi-react/LanguageTypescriptIcon';
import LanguageJavascriptIcon from 'mdi-react/LanguageJavascriptIcon';

export const portuguesData = {
  name: 'Mohamed Ibrahim Aljoke',
  header: {
    // home: 'INÍCIO',
    // about: 'SOBRE',
    projects: 'PROJETOS',
    contact: 'CONTATO',
  },
  styleMode: {
    dark: 'Modo Escuro',
    light: 'Modo Claro',
  },
  language: 'Idioma',
  projetos: [
    {
      titulo: 'Nasa Project',
      img: images.nasa,
      gitHub: 'https://github.com/Janku13/nasa-project',
      link: 'http://54.232.228.100:8000',
      descricaoCurta:
        'O projeto consume dados de API externa e planilha excel, realiza CRUD das informações com rotas para cada função, controllers e models, dockorizado e hospedado na AWS',
      descricao: '',
      usedTech: [
        <NodejsIcon color="green" />,
        <ReactIcon color="#61DBFB" />,
        <DatabaseIcon color="black" />,
        <DockerIcon color="black" />,
        <AwsIcon color="black" />,
      ],
    },
    {
      titulo: 'Crown e-commerce',
      img: images.eloja,
      gitHub: 'https://github.com/Janku13/E_commerce.git',
      link: 'http://janku-crwn-shop.herokuapp.com',
      descricaoCurta:
        'E-commerce webSite com redux, fireBase, scss, e Stripe payments. hospedado no heroku e netlify.',
      descricao: ` `,
      usedTech: [
        <ReactIcon color="#61DBFB" />,
        <FirebaseIcon color="#2C384A" />,
        <LoginIcon color="black" />,
      ],
    },
    {
      titulo: 'Node Rest Api',
      img: images.restApi,
      gitHub: 'https://github.com/Janku13/REST-NODE',
      descricaoCurta:
        'Api rest com crud para criar user e jwt token em seguida criar session usando zod para validação e express, node, mongo e TS. Também documentação com swagger docs e coleção no postman',
      descricao: ` `,
      usedTech: [
        <NodejsIcon color="green" />,
        <LanguageTypescriptIcon color="#007acc" />,
        <DatabaseIcon color="black" />,
      ],
    },
    {
      titulo: 'TV-API',
      img: images.tv,
      gitHub: 'https://github.com/Janku13/findMovie',
      link: 'https://janku13.github.io/findMovie/',
      descricaoCurta:
        'Manipular DOM e consumir API da TVmaze, para encontrar onde determinado show é hospedado',
      descricao: ` `,
      usedTech: [<LanguageJavascriptIcon color="black" />],
    },
  ],
};
