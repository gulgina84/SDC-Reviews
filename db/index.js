const { Client } = require('pg');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const port = "5432" || "5430"|| process.env.DB_PORT

const db = new Client({
  user: "postgres" || process.env.DB_USERNAME,
  database: "postgres" || "postgres_database_development",
  password: "password"|| process.env.DB_PASSWORD,
  host: "db" || process.env.DB_HOST,
  dialect: 'postgres',
  port: port
});


db.connect()
.then(() => {
  console.log(`database connected! port:${port}`)
})
.catch((err) => {
  console.log(err);
})

module.exports = db;