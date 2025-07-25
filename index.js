const express = require('express');
const _ = require('lodash');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello from sample ODC test app!');
});
app.listen(3000, () => console.log('Running on http://localhost:3000'));
