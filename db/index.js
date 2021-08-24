const { Client } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })


const db = new Client({
  user: process.env.DB_USERNAME,
  database: process.env.DB_DATABASENAME,
  password:  process.env.DB_PASSWORD,
  host:  process.env.DB_HOST,
  dialect: 'postgres',
  port: process.env.DB_PORT
});


db.connect()
.then(() => {
  console.log(`database connected! port:${port}`)
})
.catch((err) => {
  console.log(err);
})

module.exports = db;
