// Modules for each tab
import { initialLoad, repeatedSetup } from './home'
import { loadAbout } from './about'
import { loadMenu } from './menu'
import { loadContact } from './contact'
import 'bootstrap'
// CSS
import './style.css'

let content = document.getElementById('content');

// Loading Home Contents
content.appendChild(repeatedSetup());
let main = content.querySelector('main');
main.appendChild(initialLoad());


/**
 * Tab swtiching logic. If any tab is clicked, it will load the
 * contents regarding to it
 */
let navBar = content.querySelector('ul');

// Add eventListeners to all li
for(let i = 0; i < navBar.children.length; i++) {
  let li = navBar.children[i];

  
  li.addEventListener('click', (event) => {
    let tab = li.innerHTML;

    switch(tab) {
      case 'Home':
        main.innerHTML = '';
        main.appendChild(initialLoad());

        // Make a bottom line
        navRemoveBottomLine();
        li.style.borderBottom = "5px solid #20de83";        
        break;

      case 'About':
        main.innerHTML = '';
        main.appendChild(loadAbout());

        // Make a bottom line
        navRemoveBottomLine();
        li.style.borderBottom = "5px solid #20de83";      
        break;

      case 'Menu':
        main.innerHTML = '';
        main.appendChild(loadMenu());

        // Make a bottom line
        navRemoveBottomLine();
        li.style.borderBottom = "5px solid #20de83";      
        break;

      case 'Contact':
        main.innerHTML = '';
        main.appendChild(loadContact());

        // Make a bottom line
        navRemoveBottomLine();
        li.style.borderBottom = "5px solid #20de83";      
        break;
    }    
  })
}

const navRemoveBottomLine = () => {
  for(let i = 0; i < navBar.children.length; i++) {
    navBar.children[i].style.borderBottom = '';
  }
}