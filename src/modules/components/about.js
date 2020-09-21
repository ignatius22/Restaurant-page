const image = 'https://dooneyskitchen.com/wp-content/uploads/2014/09/IMG_0033-1024x764.jpg';

const about = (() => {
  const getName = () => 'About';


  const getDescription = () => `<h4>Noodle's Palace</h4>
    <p>We have been feeding the appetite of the world for over a century now</p>`;

  const getImage = () => image.toString();

  return { getName, getDescription, getImage };
})();

export { about };