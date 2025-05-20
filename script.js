// Script for Portfolio website

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

// Projects
const renderProjects = () => {
    const projectList = document.querySelector('#project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.setAttribute('id', 'project');
        projectItem.setAttribute('class', 'max-w-sm md:max-w-xl bg-black pb-4 hover:-translate-y-2 transition');

        // Loop thorugh tools
        let tools = '';
        for (let i = 0; i < project.tools.length; i++) {
            tools += `<img src="${project.tools[i]}" alt="${project.title}" class="w-5">`
        }

        projectItem.innerHTML = `
            <img id="project-image" src="${project.image}" alt="${project.title}" class="w-full">
            <div class="mt-4 px-4">
                <h2 id="project-title" class="my-6 text-2xl font-semibold">${project.title}</h2>
                
                <p id="project-description">${project.description}</p>

                <div id="tools" class="my-6 flex space-x-4">${tools}</div>

                <div id="project-links " class="mt-10 flex justify-center space-x-10">
                    <a id="github-link" class="flex flex-col items-center hover:text-green-500" target="_blank
                    href="${project.github}">
                        <i class="fa-brands fa-github"></i>
                        <span>Code</span>
                    </a>
                    <a id="live-link" class="flex flex-col items-center hover:text-green-500" target="_blank
                    href="${project.demo}">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        <span>Demo</span>
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
        
    })
}