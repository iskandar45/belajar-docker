const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'db',         // nama servicenya, bukan 'localhost'
  database: 'mydb',
  password: 'postgres',
  port: 5432,
});

client.connect()
  .then(() => console.log("🟢 Connected to PostgreSQL!"))
  .catch(err => console.error("🔴 Connection error", err));
