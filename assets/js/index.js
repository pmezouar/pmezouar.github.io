document.addEventListener('DOMContentLoaded', () => {

    // Responsive Nav
    document.querySelector('#open-icon').addEventListener('click', openNav);
    document.querySelector('#close-icon').addEventListener('click', closeNav);
})

// Open Navigation
function openNav() {
    document.querySelector('#open-icon').style.display = 'none';
    document.querySelector('#close-icon').style.display = 'inline-flex';
    document.querySelector('nav').style.display = 'flex';
}

// Close Navigation
function closeNav() {
    document.querySelector('#close-icon').style.display = 'none';
    document.querySelector('nav').style.display = 'none';
    document.querySelector('#open-icon').style.display = 'inline-flex';
}
