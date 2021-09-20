import { bodyEl } from './refs';
import { LIGHT, DARK } from './theme';

export default function fnThemeSwitch(event) {
  event.preventDefault();
  if (!event.target.checked) {
    bodyEl.classList.replace(DARK, LIGHT);
  } else if (event.target.checked) {
    bodyEl.classList.replace(LIGHT, DARK);
  }
  localStorage.setItem('theme', bodyEl.classList.value);
}
