import { createHome } from './home.js';
import { createMenu } from './menu.js';

createHome();

document.getElementById('home-btn').addEventListener('click', (e) => {
    createHome();
});

document.getElementById('menu-btn').addEventListener('click', (e) => {
    createMenu();
});