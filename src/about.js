const aboutPageImg = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';

// Function for loading About tab
const loadAbout = () => {
  const aboutMainContainer = document.createElement('div');
  aboutMainContainer.setAttribute('id', 'about-main-container');

  // Main Container contents
  const aboutImg = document.createElement('img');
  aboutImg.setAttribute('src', aboutPageImg);
  aboutImg.setAttribute('id', 'about-img');
  aboutImg.setAttribute('alt', 'about-img');

  const aboutPhraseBox = document.createElement('div');
  aboutPhraseBox.setAttribute('id', 'about-phrase-box');

  const phraseBoxSpan = document.createElement('span');
  phraseBoxSpan.setAttribute('id', 'phrase-box-span');
  phraseBoxSpan.innerHTML = 'WHO WE ARE';

  const phraseBoxP = document.createElement('p');
  phraseBoxP.setAttribute('id', 'phrase-box-p');
  phraseBoxP.innerHTML = 'Get the best Nigerian food here';


  // Appending elements to the Main
  aboutPhraseBox.appendChild(phraseBoxSpan);
  aboutPhraseBox.appendChild(phraseBoxP);
  aboutMainContainer.appendChild(aboutImg);
  aboutMainContainer.appendChild(aboutPhraseBox);

  return aboutMainContainer;
};

export { loadAbout };