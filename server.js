// the simplist of wrappers ever
// eventually turn this into an actual node app

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/feeds/rss.xml', (req, res) => {
  res.redirect('http://toolsday.libsyn.com/rss');
});

app.use(express.static(__dirname + '/www'));

app.listen(port, () => {
  console.log('app up');
});