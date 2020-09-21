const image = 'https://answersafrica.com/wp-content/uploads/2016/03/Ila-Alasepo-12.jpg';

const specialMenu = (() => {
  const getName = () => 'Special menu';

  const getDescription = () => '<h4>This is one of our popular and best dishes</h4>';

  const getImage = () => image.toString();

  return { getName, getDescription, getImage };
})();

export { specialMenu };