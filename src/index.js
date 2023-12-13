import './styles/main.scss'
import css from './assets/css.png';
import html5 from './assets/html5.png';
import tailwind from './assets/tailwind.png';
import java from './assets/java.png';
import javascript from './assets/javascript.png';
import mongodb from './assets/mongodb.png';
import node_js from './assets/node_js.png';
import npm from './assets/npm.png';
import python from './assets/python.png';
import sass from './assets/sass.png';
import django from './assets/django.png';
import battleship from './assets/battleship.PNG';
import weather from './assets/weather.PNG';
import ageCalulator from './assets/ageCalulator.PNG';
import jw from './assets/J.W.png';
import hamburgerMenu from './assets/hamburger-menu-svgrepo-com.svg';

const menu = document.querySelector('#hamburger-menu');
const menuContainer = document.querySelector('.menu-container');

document.querySelectorAll('.menu-container a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

let isOpen = false;

menu.addEventListener('click', () => {
  if (!isOpen) {
    menuContainer.style.display = 'flex';
    isOpen = true;
  } else {
    menuContainer.style.display = 'none';
    isOpen = false;
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 500) {
    menuContainer.style.display = 'flex';
  }

  if (window.innerWidth <= 500) {
    menuContainer.style.display = 'none';
  }
})