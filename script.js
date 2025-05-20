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
    projects.forEach(project => {
        // Project image
        document.querySelector('#project-image').setAttribute('src', `${project.image}`);
        // Project title
        document.querySelector('#project-title').textContent = project.title;
        // Project description
        document.querySelector('#project-description').textContent = project.description;

        // Loop throught tech stacks
        for (let i = 0; i < project.tech.length; i++) {
            document.querySelector('#tech-stack').innerHTML += `
                <img src="${project.tech[i]}" alt="${project.title}" class="w-[25px]">
            `
        }
        alert(document.querySelector('#tech-stack').innerHTML);


        // Github Link
        document.querySelector('#github-link').setAttribute('href', `${project.github} `);
        document.querySelector('#live-link').setAttribute('href', `${project.live} `);
    })
}
renderProjects();