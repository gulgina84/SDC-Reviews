const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const Sequelize = require('sequelize');
const db = new Sequelize('postgres_database_development', process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

const connect = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established');
  } catch (err) {
    console.error('Unable to connct');
  }
}
connect();

module.exports = db;