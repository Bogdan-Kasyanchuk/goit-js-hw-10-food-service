import { themeSwitchEl } from './refs';

import menu from '../json/menu.json';
import productCard from '../templates/product-cards.hbs';

import fnStartTheme from './fnStartTheme';
document.addEventListener('DOMContentLoaded', fnStartTheme);

import fnThemeSwitch from './fnThemeSwitch';
themeSwitchEl.addEventListener('change', fnThemeSwitch);

import fnRenderCard from './fnRenderCard.js';
fnRenderCard(menu, productCard);
