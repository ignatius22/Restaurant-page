const image  = 'https://netstorage-legit.akamaized.net/images/vllkytg733kuhi6t4.jpg?imwidth=900';

const menu = (() => {
  const getName = () => 'Menu';

  const getDescription = () => '<h4>Lists of available foods</h4>';

  const getImage = () => image.toString();

  return { getName, getDescription, getImage };
})();

export { menu };