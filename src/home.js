const landingPageImg = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';

// Initial load for Home tab
const initialLoad = () => {
  let homeMainContainer = document.createElement('div');
  homeMainContainer.setAttribute('id', 'home-main-container');

  // elements that belong to mainContainer
  let landingImg = document.createElement('img');
  landingImg.setAttribute('src', landingPageImg);
  landingImg.setAttribute('id', 'landing-img');
  landingImg.setAttribute('alt', 'landing-page');

  let phraseBox = document.createElement('div');
  phraseBox.setAttribute('id', 'phrase-box');

  let mainPhrase = document.createElement('p');
  mainPhrase.setAttribute('id', 'main-phrase');
  mainPhrase.innerHTML = 'WELCOME TO TASTY BITE';

  // Appending elements to the Main
  phraseBox.appendChild(mainPhrase);
  homeMainContainer.appendChild(landingImg);
  homeMainContainer.appendChild(phraseBox);

  return homeMainContainer;
}

// Function for the initial setup that's repeated again and again
const repeatedSetup = () => {
  /**
   * 1. Making all elements first that are in 'index.html'
   */
  
  // container, header, main
  let container = document.createElement('div');
  container.setAttribute('id', 'container');
  
  let header = document.createElement('header');
  let main = document.createElement('main');
  
  // Container - Direct elements
  let headerContainer = document.createElement('div');
  headerContainer.setAttribute('id', 'header-container');


  // headerContainer elements
  let restaurantTitle = document.createElement('h1');
  restaurantTitle.setAttribute('id', 'restaurant-title');
  restaurantTitle.innerHTML = '<span id="kor">TASTY</span>BITE';


  let navBar = document.createElement('ul');
  navBar.setAttribute('id', 'nav-bar');

  // navBar elements
  let navBarlis = [];
  for(let i = 0; i < 4; i++) {
    let li = document.createElement('li');  

    switch(i) {
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


  // Initial Header Setup
  navBarlis.forEach(li => navBar.appendChild(li));
  headerContainer.appendChild(restaurantTitle);
  headerContainer.appendChild(navBar);
  header.appendChild(headerContainer);
  container.appendChild(header);

  // Initial Main Setup
  container.appendChild(main);

  return container;
}

export { 
  repeatedSetup,
  initialLoad
}