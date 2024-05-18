const knex = require("knex");
const config = require("./knexfile");

const database = knex(config);

const runMigrations = async () => {
    try {
        await database.migrate.latest();
        console.log('Migrations have run successfully');
    } catch (error) {
        console.error('Error running migrations:', error);
    } finally {
        database.destroy();
    }
}

runMigrations();

module.exports = database;