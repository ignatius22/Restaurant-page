import { initialLoad, repeatedSetup } from './home';
import loadAbout from './about';
import loadMenu from './menu';
import loadContact from './contact';

import './style.css';

const content = document.getElementById('content');

content.appendChild(repeatedSetup());
const main = content.querySelector('main');
main.appendChild(initialLoad());


const navBar = content.querySelector('ul');


for (let i = 0; i < navBar.children.length; i += 1) {
  const li = navBar.children[i];

  const navRemoveBottomLine = () => {
    for (let i = 0; i < navBar.children.length; i += 1) {
      navBar.children[i].style.borderBottom = '';
    }
  };

  li.addEventListener('click', () => {
    const tab = li.innerHTML;

    switch (tab) {
      case 'Home':
        main.innerHTML = '';
        main.appendChild(initialLoad());

        navRemoveBottomLine();
        li.style.borderBottom = '5px solid #20de83';
        break;

      case 'About':
        main.innerHTML = '';
        main.appendChild(loadAbout());

        navRemoveBottomLine();
        li.style.borderBottom = '5px solid #20de83';
        break;

      case 'Menu':
      default:
        main.innerHTML = '';
        main.appendChild(loadMenu());

        navRemoveBottomLine();
        li.style.borderBottom = '5px solid #20de83';
        break;

      case 'Contact':
        main.innerHTML = '';
        main.appendChild(loadContact());
        navRemoveBottomLine();
        li.style.borderBottom = '5px solid #20de83';
    }
  });
}
