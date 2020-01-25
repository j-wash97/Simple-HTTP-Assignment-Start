const text = require('./textResponse.js');

const getHelloJSON = (response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify({ message: text.hello }));
  response.end();
};

const getTimeJSON = (response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify({ time: text.getTimeString() }));
  response.end();
};

module.exports = {
  getHelloJSON,
  getTimeJSON,
};
