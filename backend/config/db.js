const pgp = require('pg-promise')();

// Replace these values with your actual PostgreSQL credentials
const dbConfig = {
  user: 'admin_user',
  password: 'admin_password',
  host: 'localhost', // or your PostgreSQL host address
  port: 5432, // or your PostgreSQL port
  database: 'admin_db',
};

const db = pgp(dbConfig);

module.exports = db;
