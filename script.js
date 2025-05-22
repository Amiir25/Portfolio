// Script for Portfolio website

// Dark mode
let darkMode = document.querySelector('#dark-mode');
darkMode.addEventListener('click', () => {
    const bgDark = document.body.classList.toggle('bg-gray-900');
    const textLight = document.body.classList.toggle('text-gray-100');

    if (bgDark && textLight) {
        darkMode.classList.replace('fa-moon', 'fa-sun');
    } else {
        darkMode.classList.replace('fa-sun', 'fa-moon');
    }
})

// Navbar toggler
document.querySelector('#navbar-toggler').addEventListener('click', () => {
    document.querySelector('#navbar-small').classList.add('-translate-y-0');
})

// Close the navbar on X
document.querySelector('#navbar-close').addEventListener('click', () => {
    document.querySelector('#navbar-small').classList.remove('-translate-y-0');
})

// Close the navbar when a link is clicked
document.querySelectorAll('.short-nav-link').forEach((shortLink) => {
    shortLink.addEventListener('click', () => {
        document.querySelector('#navbar-small').classList.remove('-translate-y-0');
    })
})

// Skills
const renderSkills = () => {
    const skillsList = document.createElement('div');
    skillsList.setAttribute('id', 'skills-list');
    skillsList.setAttribute('class', 'grid grid-cols-4 gap-4 w-80 m-auto mt-6');

    for (let i = 0; i < skills.length; i++) {
        skillsList.innerHTML += `<img src="${skills[i]}" alt="" class="w-6">`;
    }

    document.querySelector('#skills').appendChild(skillsList);
}
renderSkills();

// Projects
const renderProjects = () => {
    const projectList = document.querySelector('#project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.setAttribute('id', 'project');
        projectItem.setAttribute(
            'class',
            'flex flex-col lg:flex-row items-center space-x-4 w-[100%] mb-20'
        );

        // Loop thorugh tools
        let tools = '';
        for (let i = 0; i < project.tools.length; i++) {
            tools += `<img src="${project.tools[i]}" alt="${project.title}" class="w-4">`
        }

        projectItem.innerHTML = `
            <div class="relative">
                <img id="project-image" src="${project.desktopimage}" alt="${project.title}" class="max-w-xs md:max-w-[450px]">
                <img id="project-image" src="${project.mobileimage}" alt="${project.title}" 
                class="w-[62px] md:w-[78px] absolute -bottom-10 -right-5 rounded">
            </div>
            <div class="md:px-4 md:text-center">
                <h2 id="project-title" class="mt-6 mb-2 text-2xl font-semibold">${project.title}</h2>
                
                <p id="project-description" class="text-xs md:mx-10">${project.description}</p>

                <div id="tools" class="my-6 flex justify-start md:justify-center space-x-4">${tools}</div>

                <div id="project-links " class="mt-10 flex justify-center space-x-10 text-sm">
                    <a href="${project.github}" id="github-link" class="flex flex-col items-center hover:text-green-500" target="_blank">
                        <i class="fa-brands fa-github"></i>
                        <span class="text-xs">Code</span>
                    </a>
                    <a href="${project.demo}" id="github-link" class="flex flex-col items-center hover:text-green-500" target="_blank">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        <span class="text-xs">Demo</span>
                    </a>
                </div>
            </div>
        `;

        projectList.appendChild(projectItem);
    })
}
renderProjects();

// Contacts
const renderContacts = () => {
    const contactList = document.querySelector('#contact-list');

    contacts.forEach(contact => {
        const contactItem = document.createElement('a');
        contactItem.setAttribute('class', 'flex flex-col gap-2 items-center');
        contactItem.setAttribute('href', `${contact.link}`);
        contactItem.innerHTML = `
            <img src="${contact.image}" alt="${contact.name}" class="w-[25px] md:w-[25px]">
            <span class="hover:text-green-500 text-xs">${contact.name}</span>
        `;

        contactList.appendChild(contactItem);
    })
}
renderContacts();