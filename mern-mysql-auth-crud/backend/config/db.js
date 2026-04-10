const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'mern_auth_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  timezone: '+00:00'
});

const promisePool = pool.promise();

pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ MySQL Connection Error:', err.message);
    console.error('DB Config:', {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'not set',
      password: process.env.DB_PASSWORD ? 'set' : 'MISSING',
      database: process.env.DB_NAME || 'not set'
    });
    return;
  }
  console.log('✅ MySQL Connected Successfully');
  connection.release();
});

module.exports = promisePool;

