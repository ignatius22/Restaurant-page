const image = 'https://allnigerianfoods.com/wp-content/uploads/nigerian-dinner-ideas.jpg';

const HomePage = (() => {
  const getName = () => "Noodle's Palace";

  const getDescription = () => `<h4 class='title'>This is Noodle Palace</h4>
    <p class='description'>This is home of noodles where we serve you best enriching plate of noodles.</p>
    <p class='quote text-center'>“Listen to the people who love you. Believe that they are worth living for even when you don't believe it. Seek out the memories depression takes away and project them into the future. Be brave; be strong; take your pills. Exercise because it's good for you even if every step weighs a thousand pounds. Eat when food itself disgusts you. Reason with yourself when you have lost your reason.”
<br><span><b>― Andrew Solomon</b></span></p>`;

  const getImage = () => image.toString();

  return { getName, getDescription, getImage };
})();

export { HomePage };