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