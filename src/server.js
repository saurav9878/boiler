const app = require('./app');
const express = require('express');
const cors = require('cors');

app.use(express.json());
app.use(cors());

require('./routes');

app.listen(3000, () => {
  console.log('Server is online! :)');
});
