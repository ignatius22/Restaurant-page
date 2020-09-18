const contactPageImg = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';

// Function for loading Contact tab
const loadContact = () => {
  const contactMainContainer = document.createElement('div');
  contactMainContainer.setAttribute('id', 'contact-main-container');

  // mainContainerContents
  const contactImg = document.createElement('img');
  contactImg.setAttribute('src', contactPageImg);
  contactImg.setAttribute('id', 'contact-img');
  contactImg.setAttribute('alt', 'contact-img');

  const contactSection = document.createElement('div');
  contactSection.setAttribute('id', 'contact-section');

  const contactTxt = document.createElement('span');
  contactTxt.setAttribute('id', 'contact-txt');
  contactTxt.innerHTML = 'CONTACT US';

  const contactIcons = document.createElement('div');
  contactIcons.setAttribute('id', 'contact-icons');
  contactIcons.className = 'text-white';
  contactIcons.innerHTML = `
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content.

Company: HostRiver
Address: 4435 Berkshire Circle Knoxville
Phone: + 879-890-9767
Website: www.uny.ro
Program: Mon to Sat: 09:30 AM - 10.30 PM
  `;

  // Appending elements to the Main
  contactSection.appendChild(contactTxt);
  contactSection.appendChild(contactIcons);
  contactMainContainer.appendChild(contactImg);
  contactMainContainer.appendChild(contactSection);

  return contactMainContainer;
};

export { loadContact };