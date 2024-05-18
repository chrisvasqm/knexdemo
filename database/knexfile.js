const config = {
    client: process.env.DATABASE_CLIENT,
    connection: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: __dirname + '/migrations'
    },
}

module.exports = config;