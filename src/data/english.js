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
  SiMongodb,
  SiSocketdotio,
  SiPostman,
  SiDart,
  SiAirplayvideo,
  SiDocker,
  SiAirtable,
  SiFlutter,
} from 'react-icons/si';
import LanguageTypescriptIcon from 'mdi-react/LanguageTypescriptIcon';
import LanguageJavascriptIcon from 'mdi-react/LanguageJavascriptIcon';
export const englishData = {
  name: 'Mohamed Ibrahim Aljoke',
  header: {
    // home: 'HOME',
    // about: 'ABOUT',
    // projects: 'PROJECTS',
    // contact: 'CONTACT',
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
        <DockerIcon color="#2497ED" />,
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
        <FirebaseIcon color="#FFA000" />,
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
      titulo: 'Nextflix',
      img: images.nextflix,
      gitHub: 'https://github.com/Janku13/nextflix',
      link: 'https://nextflix-three.vercel.app/',
      descricaoCurta:
        'Netflix clone with next.js, using SSR and auth with magic links, consuming youtube api to show data. i am working on the project TODOS: video detalhes page, watch again section and like videos.',
      descricao: '',
      usedTech: [
        <TbBrandNextjs size={28} color="#2C384A" />,
        <ReactIcon color="#61DBFB" />,
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
        <SiPostman color="#EF5B25" />,
        <SiMongodb color="#4DB33D" />,
      ],
    },
    {
      titulo: 'Youtube Server Clone',
      img: images.ytServer,
      gitHub: 'https://github.com/Janku13/node-youtube-ts',
      descricaoCurta:
        'Server with Node.js (express) auth, users and videos schema, validation with zod, cookies and jwt token. streaming and saving videos with chunks. db used is mongoose (NoSql), tested with postman',
      descricao: ` `,
      usedTech: [
        <NodejsIcon color="green" />,
        <LanguageTypescriptIcon color="#007acc" />,
        <SiPostman color="#EF5B25" />,
        <SiMongodb color="#4DB33D" />,
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
    {
      titulo: 'Flutter Todo List',
      img: images.todoFlutter,
      gitHub: 'https://github.com/Janku13/todo_list_flutter',

      descricaoCurta:
        'Add item to list check it as completed and delete, flutter + provider for state managment',
      descricao: ` `,
      usedTech: [<SiFlutter color="#007acc" />, <SiDart color="black" />],
    },
    {
      titulo: 'Flutter Quizz',
      img: images.quiz,
      gitHub: 'https://github.com/Janku13/flutter_quizz',

      descricaoCurta:
        'Project to understand dart -> OO and flutter UI and state manegment',
      descricao: ` `,
      usedTech: [<SiFlutter color="#007acc" />, <SiDart color="black" />],
    },
    {
      titulo: 'Meals React-Native',
      img: images.mealsNative,
      gitHub: 'https://github.com/Janku13/Meals',

      descricaoCurta:
        'Create styled and reusable components, and state manegment with useContext also goole maps -> React-Native app',
      descricao: ` `,
      usedTech: [<ReactIcon color="#61DBFB" />],
    },
  ],
  techs: [
    {
      text: 'React.js',
      icon: [<ReactIcon size={28} color="#61DBFB" />],
    },
    {
      text: 'Node.js',
      icon: [<NodejsIcon size={28} color="green" />],
    },
    {
      text: 'Next.js',
      icon: [<TbBrandNextjs size={28} color="#2C384A" />],
    },
    {
      text: 'Typescript',
      icon: [<LanguageTypescriptIcon color="#007acc" />],
    },
    {
      text: 'Flutter',
      icon: [<SiFlutter color="#007acc" />],
    },
    {
      text: 'Postman',
      icon: [<SiPostman color="#EF5B25" />],
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
      icon: [<SiDocker color="#2497ED" />],
    },
    {
      text: 'Firebase',
      icon: [<FirebaseIcon color="#FFA000" />],
    },
  ],
};
