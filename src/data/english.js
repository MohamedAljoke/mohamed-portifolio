import images from '../assets/imgs';
import NodejsIcon from 'mdi-react/NodejsIcon';
import DatabaseIcon from 'mdi-react/DatabaseIcon';
import DockerIcon from 'mdi-react/DockerIcon';
import AwsIcon from 'mdi-react/AwsIcon';
import ReactIcon from 'mdi-react/ReactIcon';
import FirebaseIcon from 'mdi-react/FirebaseIcon';
import LoginIcon from 'mdi-react/LoginIcon';
import { TbBrandNextjs, TbBrandUnsplash } from 'react-icons/tb';
import {
  SiSocketdotio,
  SiAirplayvideo,
  SiDocker,
  SiAirtable,
} from 'react-icons/si';
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
  proficional: [
    {
      company: 'Advanced Digital',
      atividade:
        'Maintain e-commerce websites and fix bugs, create a full e-commerce front with React (hooks & redux), integrate with api and add api routes/controllers (node.js). MERN stack: confort with react && node',
    },
  ],
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
      titulo: 'Coffee',
      img: images.coffee,
      gitHub: 'https://github.com/Janku13/next-coffee',
      link: 'https://next-coffee-bay.vercel.app/',
      descricaoCurta:
        'A project i did to learn Next.js and AIRTABLE with SSR && SWR for up voting, it fetches data from an external api and imgs from UNSPLASH api. add up votes and find more stores near me buttons',
      descricao: '',
      usedTech: [
        <TbBrandNextjs size={28} color="#2C384A" />,
        <ReactIcon color="#61DBFB" />,
        <TbBrandUnsplash size={28} color="#2C384A" />,
        <SiAirtable size={28} color="black" />,
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
      titulo: 'Adicionar Video',
      img: images.videos,
      gitHub: 'https://github.com/Janku13/stream-video-next.git',
      descricaoCurta:
        'fs with next.js and Ts, you can add videos and then stream the video with chunks, page to add video and to watch.TODO -> clone YT',
      descricao: '',
      usedTech: [
        <TbBrandNextjs size={28} color="#2C384A" />,
        <LanguageTypescriptIcon color="#007acc" />,
        <ReactIcon color="#61DBFB" />,
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
    {
      titulo: 'Chat App',
      img: images.socket,
      gitHub: 'https://github.com/Janku13/Next-Node-Socketio',

      descricaoCurta:
        'Making a chat app with socket io, send message create room.',
      descricao: ` `,
      usedTech: [
        <TbBrandNextjs size={28} color="#2C384A" />,
        <NodejsIcon color="green" />,
        <LanguageTypescriptIcon color="#007acc" />,
      ],
    },
    {
      titulo: 'Ping Pong',
      img: images.pong,
      gitHub: 'https://github.com/Janku13/ping-pong-socket-node',

      descricaoCurta: 'Ping pong game with node, ts and socket.io .',
      descricao: ` `,
      usedTech: [
        <NodejsIcon color="green" />,
        <LanguageTypescriptIcon color="#007acc" />,
      ],
    },
  ],
  techs: [
    {
      text: 'Next.js',
      icon: [<TbBrandNextjs size={28} color="#2C384A" />],
    },
    {
      text: 'Typescript',
      icon: [<LanguageTypescriptIcon color="#007acc" />],
    },
    {
      text: 'Socket.io',
      icon: [<SiSocketdotio color="#007acc" />],
    },
    {
      text: 'Video streaming (node with fs)',
      icon: [<SiAirplayvideo color="#007acc" />],
    },
    {
      text: 'React Native',
      icon: [<ReactIcon color="#61DBFB" />],
    },
    {
      text: 'Docker',
      icon: [<SiDocker color="black" />],
    },
    {
      text: 'Firebase',
      icon: [<FirebaseIcon color="#2C384A" />],
    },
  ],
};
