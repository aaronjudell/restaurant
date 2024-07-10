import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createAbout } from './about.js';

createHome();

document.getElementById('home-btn').addEventListener('click', (e) => {
    createHome();
});

document.getElementById('menu-btn').addEventListener('click', (e) => {
    createMenu();
});

document.getElementById('about-btn').addEventListener('click',
(e) => {
    createAbout();
});