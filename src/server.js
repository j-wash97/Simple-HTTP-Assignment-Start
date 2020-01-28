const http = require('http');
const htmlHandler = require('./htmlResponse.js');
const textHandler = require('./textResponse.js');
const jsonHandler = require('./jsonResponse.js');
const imageHandler = require('./imageResponse.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
    default:
      htmlHandler.getIndex(response);
      break;
    case '/page2':
      htmlHandler.getPage2(response);
      break;
    case '/hello':
      textHandler.getHello(response);
      break;
    case '/time':
      textHandler.getTime(response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(response);
      break;
    case '/dankmemes':
      imageHandler.getSpongegar(response);
      break;
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on port ${port}`);
