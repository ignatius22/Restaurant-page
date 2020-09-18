import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'bootstrap';
import 'bootstrap/js/dist/dropdown';
import renderNav from './navbar';
import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';


renderNav();
renderHome();

const tabLinks = document.querySelectorAll('.nav-link');
const content = document.getElementById('content');

const renderPage = (location, page) => {
  location.innerHTML = '';
  page();
};

const removeActive = () => {
  tabLinks.forEach((link) => {
    if (link.classList.contains('active')) {
      link.classList.remove('active');
    }
  });
};

tabLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    if (e.target.textContent === 'Home') {
      removeActive();
      e.target.classList.add('active');
      renderPage(content, renderHome);
    }

    if (e.target.textContent === 'Menu') {
      removeActive();
      e.target.classList.add('active');
      renderPage(content, renderMenu);
    }

    if (e.target.textContent === 'Contact') {
      removeActive();
      e.target.classList.add('active');
      renderPage(content, renderContact);
    }
  });
});