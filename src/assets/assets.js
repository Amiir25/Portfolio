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
        description: 'A full-stack web application that helps job seekers stay organized throughout their job hunt by adding new job applications and updating statuses. It showcases CRUD operations, form validation, and a responsive UI with smooth animations.',
        tech: [TailwindCSS, React, Node, Express, MySQL] 
    },
];