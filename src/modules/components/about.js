const image = 'https://allnigerianfoods.com/wp-content/uploads/jollof-rice.jpg';

const about = (() => {
  const getName = () => 'About';


  const getDescription = () => `<h4>Noodle's Palace</h4>
    <p>We have been feeding the appetite of the world for over a century now</p>`;

  const getImage = () => image.toString();

  return { getName, getDescription, getImage };
})();

export { about };