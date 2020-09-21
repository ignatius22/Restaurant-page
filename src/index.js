import './scss/app.scss';
import { content } from './modules/app';

const mainContent = document.getElementById('content');

mainContent.appendChild(content);

const navMenu = document.getElementById('nav_menu');

const container = document.createElement('div');
container.className = 'container';

const row = document.createElement('div');
row.className = 'row';

const descrip = document.createElement('div');
descrip.className = 'col-4';
row.appendChild(descrip);

const contenImg = document.createElement('img');
contenImg.className = 'col-8';
row.appendChild(contenImg);

container.appendChild(row);

content.appendChild(container);

function linkTags(currElem) {
  const a = document.querySelectorAll('.navbar a');
  [...a].map((el) => {
    if (el.hasAttribute('style')) {
      el.setAttribute('style', '');
    }
    return '';
  });
  currElem.setAttribute('style', `border-bottom: 2px solid #c73232;
                        background-color: #343a40 !important;
                        border-radius: 20% 0px 0px;`);
}

navMenu.addEventListener('click', (e) => {
  const elem = e.target;
  descrip.innerHTML = elem.getAttribute('data_description');
  contenImg.src = elem.getAttribute('data_image');
  linkTags(elem);
});

const brand = document.getElementById('brand');

function load() {
  descrip.innerHTML = brand.getAttribute('data_description');
  contenImg.src = brand.getAttribute('data_image');
  linkTags(brand);
}

brand.onload = load();
brand.addEventListener('click', load);