const image = 'https://images.squarespace-cdn.com/content/v1/53d2a092e4b0125510bfe57d/1438095905112-APV2H61W1ACWIS17DILW/ke17ZwdGBToddI8pDm48kD33KhhWEodMJvcytjXFyvFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIXZi3p8TzzCd5LBww9rBU5Je7LlmHzK_8BCOYYXjEaPwKMshLAGzx4R3EDFOm1kBS/image-asset.jpeg';

const menu = (() => {
  const getName = () => 'Menu';

  const getDescription = () => '<h4>Lists of available foods</h4>';

  const getImage = () => image.toString();

  return { getName, getDescription, getImage };
})();

export { menu };