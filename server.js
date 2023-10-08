const dotenv = require('dotenv');
const mysql = require('mysql');

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: '.env' });
const app = require('./app');
// REQUIRED MODULES
//////////////////////////////////////////
const dbConnection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

// Connect to the MySQL database
dbConnection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL database');
});

const port = 5500;

const server = app.listen(port, () => {
  console.log(`App running on port ${port} in ${process.env.NODE_ENV}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
