const makChangImg = 'https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/catfish-pepper-soup.jpg'
const kimbapImg ='https://allnigerianfoods.com/wp-content/uploads/nigerian-dinner-ideas.jpg'
const spicyRadishImg = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
const bibimbapImg = 'https://healthguide.ng/wp-content/uploads/2019/07/IMG_20190729_015830_814.jpg'
const crabImg = 'https://allnigerianfoods.com/wp-content/uploads/egusi-soup-recipe.jpg'
const bulgogiImg = 'https://afrotourism.com/wp-content/uploads/2018/06/ofada-sauce1.jpg'



// Function for loading Menu tab
const loadMenu = () => {
  let menuMainContainer = document.createElement('div');
  menuMainContainer.setAttribute('id', 'menu-main-container');

  // mainContainer
  let mainContainerItems = [];
  for(let i = 0; i < 6; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'menu-items');

    // Create a new image HTML element
    const img = new Image();
    
    switch(i) {
      case 0:
        img.src = makChangImg;
        div.appendChild(img);
        break;
    
      case 1:
        img.src = kimbapImg;
        div.appendChild(img);
        break;
    
      case 2:
        img.src = spicyRadishImg;
        div.appendChild(img);
        break;
    
      case 3:
        img.src = bibimbapImg;
        div.appendChild(img);
        break;

      case 4:
        img.src = crabImg;
        div.appendChild(img);
        break; 
      
      case 5:
        img.src = bulgogiImg;
        div.appendChild(img);
        break;
    }

    mainContainerItems.push(div);
  }

  // Appending elements to the mainContainer
  mainContainerItems.forEach(div => menuMainContainer.appendChild(div));
  
  return menuMainContainer;
}

export { loadMenu }