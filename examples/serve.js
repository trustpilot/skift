const http = require('http');
const express = require('express');

const app = express();

app.set('port', 8080);

app.use(express.static('./examples/basic/'));
app.use(express.static('./dist'));

http.createServer(app).listen(app.get('port'), () => {
  console.log('Local server is started at http://localhost:8080/');
});
