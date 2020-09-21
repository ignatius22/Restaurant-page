const image = 'https://allnigerianfoods.com/wp-content/uploads/nigerian-dinner-ideas.jpg';

const homePage = (() => {
  const getName = () => 'Tasty Bite';

  const getDescription = () => `<h4 class='title'>This is Tasty Bite</h4>
    <p class='description'>What would you like to eat today?</p>
    <p class='quote text-center'>“What I say is that, if a man really likes potatoes, he must be a pretty decent sort of fellow.”
<br><span><b>― A.A. Milne</b></span></p>`;

  const getImage = () => image.toString();

  return { getName, getDescription, getImage };
})();

export { homePage };