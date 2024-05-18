// This the only way that Knex can ready dotenv values
require('dotenv').config();

const knex = require('knex')({
  client: process.env.DATABASE_CLIENT,
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: __dirname + '/migrations'
  },
});

knex.migrate.latest()
    .then(() => console.log('Migrations have run successfully'))
    .catch(error => console.error('Error running migrations:', error));

module.exports = knex;