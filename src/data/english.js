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
export const englishData = {
  name: 'Mohamed Ibrahim Aljoke',
  header: {
    // home: 'HOME',
    // about: 'ABOUT',
    projects: 'PROJECTS',
    contact: 'CONTACT',
  },
  styleMode: {
    dark: 'Dark Mode',
    light: 'Light Mode',
  },
  language: 'Language',
  projetos: [
    {
      titulo: 'Nasa Project',
      img: images.nasa,
      gitHub: 'https://github.com/Janku13/nasa-project',
      link: 'http://54.232.228.100:8000',
      descricaoCurta:
        'A project that gets data from both other API and from excel, with CRUD routes, controllers and models, made image in docker and hosted in aws.',
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
        'E-commerce webSite with redux, fireBase, scss, and Stripe payments. hosted on heroku and netlify.',
      descricao: '',
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
        'Rest Api that has use CRUD and session JWT token and cookies, validtion with zod and test with Jest also made a UI in next for the auth and swagger docs',
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
        'This project uses DOM and API from TVmaze. you can enter the show name, and it gets the possible image and a link where you can watch it',
      descricao: ` `,
      usedTech: [<LanguageJavascriptIcon color="black" />],
    },
  ],
};
