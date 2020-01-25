const hello = 'Hello, World!';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

const getHello = (response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
};

const getTime = (response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
};

module.exports = {
  hello,
  getTimeString,
  getHello,
  getTime,
};
