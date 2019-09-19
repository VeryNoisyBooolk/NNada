require('dotenv').config();

const db = require('knex')({
  client: 'pg',
  connection: {
    host : process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user : process.env.POSTGRES_USER,
    password : process.env.POSTGRES_PASSWORD,
    database : process.env.POSTGRES_DATABASE
  }
});

module.exports = db;
