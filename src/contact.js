const contactPageImg = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'

// Function for loading Contact tab
const loadContact = () => {
  let contactMainContainer = document.createElement('div');
  contactMainContainer.setAttribute('id', 'contact-main-container');

  // mainContainerContents
  let contactImg = document.createElement('img');
  contactImg.setAttribute('src', contactPageImg);
  contactImg.setAttribute('id', 'contact-img');
  contactImg.setAttribute('alt', 'contact-img');

  let contactSection = document.createElement('div');
  contactSection.setAttribute('id', 'contact-section');
  
  let contactTxt = document.createElement('span');
  contactTxt.setAttribute('id', 'contact-txt');
  contactTxt.innerHTML = 'CONTACT US';

  let contactIcons = document.createElement('div');
  contactIcons.setAttribute('id', 'contact-icons');
  contactIcons.innerHTML = `
    <a href="https://github.com/daegudude"><i class="fab fa-github"></i></a>
    <a href="https://twitter.com/Daegudude_Kim"><i class="fab fa-twitter-square"></i></a>
    <a href="mailto:k3hppk@gmail.com"><i class="far fa-envelope"></i></a>
  `;
  
  // Appending elements to the Main
  contactSection.appendChild(contactTxt);
  contactSection.appendChild(contactIcons);
  contactMainContainer.appendChild(contactImg);
  contactMainContainer.appendChild(contactSection);
  
  return contactMainContainer;
}

export { loadContact }