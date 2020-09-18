const repeatedSetup = () => {
  /**
   * 1. Making all elements first that are in 'index.html'
   */

  // container, header, main
  const container = document.createElement('div');
  container.setAttribute('id', 'container');

  const header = document.createElement('header');
  const main = document.createElement('main');

  // Container - Direct elements
  const headerContainer = document.createElement('div');
  headerContainer.setAttribute('id', 'header-container');

  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main-container');


  // headerContainer elements
  const restaurantTitle = document.createElement('h1');
  restaurantTitle.setAttribute('id', 'restaurant-title');
  restaurantTitle.innerHTML = 'DG<span id="kor">KOR</span>DISH';


  const navBar = document.createElement('ul');
  navBar.setAttribute('id', 'nav-bar');

  // navBar elements
  const navBarlis = [];
  for (let i = 0; i < 4; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    let page;
    switch (i) {
      case 0:
        page = 'index.html';
        a.innerHTML = 'Home';
        break;
      case 1:
        page = 'about.html';
        a.innerHTML = 'About';
        break;
      case 2:
        page = 'menu.html';
        a.innerHTML = 'Menu';
        break;
      case 3:
        page = 'Contact.html';
        a.innerHTML = 'Contact';
        break;
    }

    a.setAttribute('href', page);
    li.appendChild(a);
    navBarlis.push(li);
  }


  // Header
  navBarlis.forEach(li => navBar.appendChild(li));
  headerContainer.appendChild(restaurantTitle);
  headerContainer.appendChild(navBar);
  header.appendChild(headerContainer);
  container.appendChild(header);

  return container;
};

export { repeatedSetup };