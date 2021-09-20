import { menuEl } from './refs';

export default function fnRenderCard(menu, productCard) {
  menuEl.insertAdjacentHTML('beforeend', productCard(menu));
}
