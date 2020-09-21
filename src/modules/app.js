import { homePage } from './components/home';
import { menu } from './components/menu';
import { specialMenu } from './components/menu-special';
import { contact } from './components/contact';
import { about } from './components/about';

const content = document.createElement('div');

const navbar = document.createElement('div');
navbar.className = 'navbar navbar-expand-lg bg-dark fixed-top';

function setAttributes(el, attrs) {
  Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
}

const brand = document.createElement('a');
brand.className = 'navbar-brand';
brand.textContent = homePage.getName();
setAttributes(brand, {
  id: 'brand',
  data_image: homePage.getImage(),
  data_description: homePage.getDescription(),
});
navbar.appendChild(brand);

const navMenu = document.createElement('ul');
navMenu.className = 'navbar-nav ml-auto';
navMenu.setAttribute('id', 'nav_menu');

const liMenu = document.createElement('li');
liMenu.className = 'nav-item';
const liMenuLink = document.createElement('a');
setAttributes(liMenuLink, { data_image: menu.getImage(), data_description: menu.getDescription() });
liMenuLink.className = 'nav-link';
liMenuLink.textContent = menu.getName();
liMenu.appendChild(liMenuLink);

navMenu.appendChild(liMenu);

const liSpecial = document.createElement('li');
liSpecial.className = 'nav-item';
const liSpecialLink = document.createElement('a');
liSpecialLink.className = 'nav-link';
liSpecialLink.textContent = specialMenu.getName();
liSpecial.appendChild(liSpecialLink);

setAttributes(liSpecialLink,
  { data_image: specialMenu.getImage(), data_description: specialMenu.getDescription() });

navMenu.appendChild(liSpecial);


const liContact = document.createElement('li');
liContact.className = 'nav-item';
const liContactLink = document.createElement('a');
liContactLink.className = 'nav-link';
liContactLink.textContent = contact.getName();
liContact.appendChild(liContactLink);

setAttributes(liContactLink,
  { data_image: contact.getImage(), data_description: contact.getDescription() });

navMenu.appendChild(liContact);

const liAbout = document.createElement('li');
liAbout.className = 'nav-item';
const liAboutLink = document.createElement('a');
liAboutLink.className = 'nav-link';
liAboutLink.textContent = about.getName();
liAbout.appendChild(liAboutLink);

setAttributes(liAboutLink, {
  data_image: about.getImage(),
  data_description: about.getDescription(),
});

navMenu.appendChild(liAbout);

navbar.appendChild(navMenu);

content.appendChild(navbar);

export { content };