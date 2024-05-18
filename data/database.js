const config = require('../knexfile');
const knex = require('knex');

const database = knex(config);

database.migrate.latest()
    .then(() => console.log('Migrations have run successfully'))
    .catch(error => console.error('Error running migrations:', error));

module.exports = database;