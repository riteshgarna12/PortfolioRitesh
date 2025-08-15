import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';

export const links = [
  {
    name: 'Home',
    icon: <FaHome className='nav-icon' />,
    path: '#home', 
  },
  {
    name: 'About',
    icon: <FaUser className='nav-icon' />,
    path: '#about', 
  },
  {
    name: 'Projects',
    icon: <FaFolderOpen className='nav-icon' />,
    path: '#projects',
  },
  {
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav-icon' />,
    path: '#contact',
  },
];

import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind-css-logo.svg';

import skillsImg7 from './assets/python.png';
import skillsImg8 from './assets/C_Logo.png';
import skillsImg9 from './assets/c++.png';
import skillsImg10 from './assets/sql.png';

export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    level: 'Advanced',
    category: 'developer',
  },

  {
    id: 3,
    img: skillsImg3,
    title: 'JavaScript',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 4,
    img: skillsImg4,
    title: 'React',
    level: 'Basic',
    category: 'developer',
  },

  {
    id: 5,
    img: skillsImg5,
    title: 'Tailwind',
    level: 'Intermediate',
    category: 'developer',
  },
  {
    id: 7,
    img: skillsImg7,
    title: 'Python',
    level: 'Intermediate',
    category: 'langauge',
  },

  {
    id: 8,
    img: skillsImg8,
    title: 'C',
    level: 'Intermediate',
    category: 'langauge',
  },
  {
    id: 9,
    img: skillsImg9,
    title: 'C++',
    level: 'Intermediate',
    category: 'langauge',
  },
  {
    id: 11,
    img: skillsImg10,
    title: 'SQL',
    level: 'Intermediate',
    category: 'langauge',
  },
];


import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'February, 2025 - Present',
    title: 'Machine Learning Intern',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'May,24 - July,24',
    title: 'Full Stack Web Development',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: 'October,23 - November,23',
    title: 'Python Programming',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt.',
  },

  {
    id: 4,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2022 - 2026',
    title: 'Bachlor of Technology in CSE',
    desc: 'Jaipur Engineering College and Research Centre - 8.23 cgpa',
  },

  {
    id: 5,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2021',
    title: 'Talent Public Se. Sec. School',
    desc: 'XII :- 92.20%',
  },

  {
    id: 6,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2019',
    title: 'Talent Public Se. Sec. School',
    desc: 'X :- 77.83%',
  },
];


import projectImg1 from './assets/project-1.png';
import projectImg2 from './assets/project-2.png';
import projectImg3 from './assets/project-3.png';
import projectImg4 from './assets/project-4.jpeg';
import mongo from './assets/mongo.jpeg'
import node from './assets/node.jpeg'
export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: 'PrepMate-AI',
    description:
      'AI powered personalized interview preperation website',
    skills: [skillsImg1, skillsImg2, skillsImg3, skillsImg4, skillsImg5,node,mongo],
    link: 'https://github.com/riteshgarna12/PrepMate-Ai1',
  },

  {
    id: 2,
    img: projectImg2,
    title: 'Echonest',
    description:
      'Store your memories safely here',
    skills: [skillsImg1, skillsImg2, skillsImg3, skillsImg4, skillsImg5,node,mongo],
    link: 'https://github.com/riteshgarna12/ECHONEST',
  },

  {
    id: 3,
    img: projectImg3,
    title: 'Fitnova',
    description:
      'GYM website',
    skills: [skillsImg1, skillsImg2, skillsImg3, skillsImg4, skillsImg5],
    link: 'https://github.com/riteshgarna12/Gym-Management-System',
  },

  {
    id: 4,
    img: projectImg4,
    title: 'Ai- Assistant',
    description:
      'Voice Assistant for PCs',
    skills: [skillsImg1, skillsImg2, skillsImg3, skillsImg7],
    link: 'https://github.com/riteshgarna12/Ai-Assistant',
  },
];