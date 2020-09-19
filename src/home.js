const landingPageImg = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';

const initialLoad = () => {
  const homeMainContainer = document.createElement('div');
  homeMainContainer.setAttribute('id', 'home-main-container');

  const landingImg = document.createElement('img');
  landingImg.setAttribute('src', landingPageImg);
  landingImg.setAttribute('id', 'landing-img');
  landingImg.setAttribute('alt', 'landing-page');

  const phraseBox = document.createElement('div');
  phraseBox.setAttribute('id', 'phrase-box');

  const mainPhrase = document.createElement('p');
  mainPhrase.setAttribute('id', 'main-phrase');
  mainPhrase.innerHTML = 'WELCOME TO TASTY BITE';

  phraseBox.appendChild(mainPhrase);
  homeMainContainer.appendChild(landingImg);
  homeMainContainer.appendChild(phraseBox);

  return homeMainContainer;
};

const repeatedSetup = () => {
  const container = document.createElement('div');
  container.setAttribute('id', 'container');

  const header = document.createElement('header');
  const main = document.createElement('main');

  const headerContainer = document.createElement('div');
  headerContainer.setAttribute('id', 'header-container');

  const restaurantTitle = document.createElement('h1');
  restaurantTitle.setAttribute('id', 'restaurant-title');
  restaurantTitle.innerHTML = '<span id="kor">TASTY</span>BITE';


  const navBar = document.createElement('ul');
  navBar.setAttribute('id', 'nav-bar');

  const navBarlis = [];
  for (let i = 0; i < 4; i += 1) {
    const li = document.createElement('li');

    switch (i) {
      default:
      case 0:
        li.innerHTML = 'Home';
        break;
      case 1:
        li.innerHTML = 'About';
        break;
      case 2:
        li.innerHTML = 'Menu';
        break;
      case 3:
        li.innerHTML = 'Contact';
        break;
    }

    navBarlis.push(li);
  }

  navBarlis.forEach(li => navBar.appendChild(li));
  headerContainer.appendChild(restaurantTitle);
  headerContainer.appendChild(navBar);
  header.appendChild(headerContainer);
  container.appendChild(header);

  container.appendChild(main);

  return container;
};

export {
  repeatedSetup,
  initialLoad,
};