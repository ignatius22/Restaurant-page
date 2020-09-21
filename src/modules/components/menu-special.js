const image = 'https://allnigerianfoods.com/wp-content/uploads/jollof-rice.jpg';

const specialMenu = (() => {
  const getName = () => 'Special menu';

  const getDescription = () => '<h4>great intercontinental dish for special people like you</h4>';

  const getImage = () => image.toString();

  return { getName, getDescription, getImage };
})();

export { specialMenu };