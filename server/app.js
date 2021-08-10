const express = require('express');
const app = express();
const result = require('dotenv').config();
const Sequelize = require('sequelize');
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello World');
})

if (result.error) {
  throw result.error
}

const sequelize = new Sequelize('postgres', `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

app.listen(port, () => {
  console.log(`Server is listening at ${process.env.DB_HOST}:${port}`)
})