const express = require('express');
const app = express();
const router = require('./Routers/index.js');
require('dotenv').config();

const bodyParser = require('body-parser');
const port = process.env.PORT;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',router);


app.listen(port, () => {
  console.log(`Server is listening at localhost:${port}`)
})