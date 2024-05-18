const config = require('../knexfile');
const knex = require('knex');

const database = knex(config);

// Executes any pending migrations during server startup
database.migrate.latest()
    .then(() => console.log('Migrations have run successfully'))
    .catch(error => console.error('Error running migrations:', error));

module.exports = database;