import { themeSwitchEl, bodyEl } from './refs';
import { LIGHT, DARK } from './theme';

export default function fnStartTheme() {
  if (!localStorage.getItem('theme')) {
    bodyEl.classList.add(LIGHT);
  } else {
    bodyEl.classList.add(localStorage.getItem('theme'));
  }
  if (bodyEl.classList.contains(DARK)) {
    themeSwitchEl.checked = true;
  }
}
