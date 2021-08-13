const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })


module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "postgres_database_development",
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "database_test",
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "database_production",
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
}
