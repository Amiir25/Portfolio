import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

// Import skills
import C from './skills/c.webp';
import Python from './skills/python.webp';
import HTML from './skills/html.webp';
import CSS from './skills/css.webp';
import JavaScript from './skills/javascript.webp';
import Bootstrap from './skills/bootstrap.webp';
import TailwindCSS from './skills/tailwind-css.png';
import React from './skills/react.png';
import Node from './skills/node.png';
import Express from './skills/express.png';
import MongoDB from './skills/mongodb.png';
import MySQL from './skills/mysql.webp';
import Git from './skills/git.webp';
import GitHub from './skills/github.png';

// Import Projects
import appWorksDesktop from './projects/app-works-desktop.webp';
import appWorksMobile from './projects/app-works-mobile.webp';
import aplyzerDesktop from './projects/aplyzer-desktop.PNG';
import aplyzerMobile from './projects/aplyzer-mobile.PNG';
import { faDiscord, faLinkedin, faTelegram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';


// Export skills
export const skills = [
    {
        name: 'C',
        image: C
    },
    {
        name: 'Python',
        image: Python
    },
    {
        name: 'HTML',
        image: HTML
    },
    {
        name: 'CSS',
        image: CSS
    },
    {
        name: 'JavaScript',
        image: JavaScript
    },
    {
        name: 'Bootstrap',
        image: Bootstrap
    },
    {
        name: 'TailwindCSS',
        image: TailwindCSS
    },
    {
        name: 'React',
        image: React
    },
    {
        name: 'Node',
        image: Node
    },
    {
        name: 'Express',
        image: Express
    },
    {
        name: 'MongoDB',
        image: MongoDB
    },
    {
        name: 'MySQL',
        image: MySQL
    },
    {
        name: 'Git',
        image: Git
    },
    {
        name: 'GitHub',
        image: GitHub
    },
];

// ExportProjects
export const projects = [
    {
        name: 'AppWorks',
        desktopImage: appWorksDesktop,
        mobileImage: appWorksMobile,
        description: 'A clean, single-page landing site for AppWorks — a tech company providing business-focused technology solutions. Highlights include a hero message, service overview, client testimonials, and more.',
        tech: [HTML, CSS, JavaScript] 
    },
    {
        name: 'Aplyzer',
        desktopImage: aplyzerDesktop,
        mobileImage: aplyzerMobile,
        description: 'A full-stack job application tracker website that helps job seekers stay organized throughout their job hunt by adding new job applications and updating statuses. It showcases CRUD operations, form validation, and a responsive UI with smooth animations.',
        tech: [TailwindCSS, React, Node, Express, MySQL] 
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
    },
    {
        icon: faTelegram,
        name: 'Telegram',
    },
    {
        icon: faWhatsapp,
        name: 'Whatapp'
    },
    {
        icon: faXTwitter,
        name: 'X'
    },
    {
        icon: faDiscord,
        name: 'Discord'
    },
];