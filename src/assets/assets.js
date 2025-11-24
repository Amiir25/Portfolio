import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faLinkedin, faTelegram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// Import skills
import C from './skills/c.webp';
import Python from './skills/python.webp';
import HTML from './skills/html.webp';
import CSS from './skills/css.webp';
import JavaScript from './skills/javascript.webp';
import Bootstrap from './skills/bootstrap.webp';
import TailwindCSS from './skills/tailwind-css.webp';
import React from './skills/react.webp';
import Node from './skills/node.webp';
import Express from './skills/express.webp';
import MongoDB from './skills/mongodb.webp';
import MySQL from './skills/mysql.webp';
import Git from './skills/git.webp';
import GitHub from './skills/github.png';
import Canva from './skills/canva.webp';
import Figma from './skills/figma.webp';
import NextJs from './skills/nextjs.webp';
import reactRouter from './skills/react-router.webp';
import RestAPI from './skills/rest-api.webp';
import TypeScript from './skills/typescript.webp';

// Import Projects
import appWorksDesktop from './projects/app-works-desktop.webp';
import appWorksMobile from './projects/app-works-mobile.webp';
import aplyzerDesktop from './projects/aplyzer-desktop.webp';
import aplyzerMobile from './projects/aplyzer-mobile.webp';
import elbethelDesktop from './projects/elbethel-desktop.webp';
import elbethelMobile from './projects/elbethel-mobile.webp';


// Export skills
export const skills = [
    { name: 'C', image: C },
    { name: 'Python', image: Python },
    { name: 'Canva', image: Canva },
    { name: 'Figma', image: Figma },
    { name: 'HTML', image: HTML },
    { name: 'CSS', image: CSS },
    { name: 'JavaScript', image: JavaScript },
    { name: 'Bootstrap', image: Bootstrap },
    { name: 'TailwindCSS', image: TailwindCSS },
    { name: 'React', image: React },
    { name: 'Node', image: Node },
    { name: 'Express', image: Express },
    { name: 'Next.JS', image: NextJs },
    { name: 'React Router', image: reactRouter },
    { name: 'RestAPI', image: RestAPI },
    { name: 'TypeScript', image: TypeScript },
    { name: 'MongoDB', image: MongoDB },
    { name: 'MySQL', image: MySQL },
    { name: 'Git', image: Git },
    { name: 'GitHub', image: GitHub },
];

// ExportProjects
export const projects = [
    {
        name: 'AppWorks',
        desktopImage: appWorksDesktop,
        mobileImage: appWorksMobile,
        description: 'A clean, single-page landing site for AppWorks — a tech company providing business-focused technology solutions. Highlights include a hero message, service overview, client testimonials, and more.',
        tech: [HTML, CSS, JavaScript],
        codeLink: 'https://github.com/Amiir25/AppWorks.git',
        liveLink: 'https://app-works.netlify.app/',
    },
    {
        name: 'Aplyzer',
        desktopImage: aplyzerDesktop,
        mobileImage: aplyzerMobile,
        description: 'A full-stack job application tracker website that helps job seekers stay organized throughout their job hunt by adding new job applications and updating statuses. It showcases CRUD operations, form validation, and a responsive UI with smooth animations.',
        tech: [TailwindCSS, React, Node, Express, MySQL],
        codeLink: 'https://github.com/Amiir25/Aplyzer.git',
        liveLink: 'https://youtu.be/mr06eX3Et7k',
    },
    {
        name: 'Elbethel Advertising PLC',
        desktopImage: elbethelDesktop,
        mobileImage: elbethelMobile,
        description: 'A fully responsive business platform showcasing the company’s services, portfolio, and supplied products with a modern UI and optimized performance. I also implemented SEO best practices, dynamic image handling, and a clean component structure to support scalability and long-term maintainability.',
        tech: [TailwindCSS, NextJs, TypeScript],
        codeLink: 'https://github.com/Amiir25/ElbethelAdvertising.git',
        liveLink: 'https://elbetheladvert.vercel.app/',
    },
];

// Get In Touch
// Let's Talk
export const letsTalk = [
    {
        icon: faEnvelope,
        name: 'Email',
        value: 'amirsadik636@gmail.com',
    },
    {
        icon: faPhone,
        name: 'Phone',
        value: '+251 944 081 246',
    },
    {
        icon: faLocationDot,
        name: 'Location',
        value: 'Addis Ababa, Ethiopia',
    },
];

// Lets Chat + Collaborate
export const letsChat = [
    {
        icon: faLinkedin,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/amir-sadik-20b2a9291/',
    },
    {
        icon: faTelegram,
        name: 'Telegram',
        link: 'https://t.me/amir_sadik',
    },
    {
        icon: faWhatsapp,
        name: 'Whatapp',
        link: 'https://web.whatsapp.com/',
    },
    {
        icon: faXTwitter,
        name: 'X',
        link: 'https://x.com/0x0A_mir',
    },
];