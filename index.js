const express = require('express');

const port = 5000;
const db = require('./config/mongoose');
const app = express();

app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(express.json());

//redirecting routes
app.use('/', require('./routes'));

app.listen(port, function (err) {
  if (err) {
    console.log('error');
    return;
  }

  console.log(`server is running on ${port}`);
});
