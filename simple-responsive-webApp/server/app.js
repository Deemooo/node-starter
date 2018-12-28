const api = require('./api/api');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(api);
app.use(express.static(path.resolve(__dirname, 'public')));
app.get('*', function (req, res) {
  const html = fs.readFileSync('../client/index.html', 'utf-8')
  res.send(html)
})
app.listen(3000);
console.log('success listen......');
