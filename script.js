const themeButton = document.getElementById('themeButton');
const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
themeButton.addEventListener('click', () => document.body.classList.toggle('light'));
menuButton.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
