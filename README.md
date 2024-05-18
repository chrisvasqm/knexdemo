# Knex Demo

Demostration project to show how to use `Express` and `Knex` to build a Web Service.

## Prerequisites

Before you start coding away, make sure to install:

1. `Git`
2. `Node.js`
3. `Docker`

## Knex Setup

Due to the way that `Knex` works, there's a specific set of rules we need to follow:

1. There needs to be a file named `knexfile.js` somewhere in the project, preferably in the `/` root folder.
2. This `knexfile.js` must export an `object` with a specific set of properties depending on the Database Provider your project uses (in this case PostgreSQL).
3. The `knexfile.js` must point to the folder relative to it's path, where the `migrations` folder will be located (in this case, the `/data/migrations`).
4. At the top of the `knexfile.js`, we must call `dotenv` and configure it. In case you move it to a subfolder, you must pass an object to the `.config` method providing the path back to the `/` folder where your `.env` should be.
5. In order to have migrations be executed programatically to avoid having to run them manually, there must be another module that will import the `knexfile` configuration object and then call `.migrate.latest()`, which returns a `Promise`, so we must handle both success and failure scenarios (check how it's done in `/data/database.js`).
6. This object that is responsible for the programatic migrations can then be exported and used in your `routes` to query or mutate data in the actual database.

## Getting started

### Optional

- Make a copy of the `.env.example` file found at the `/` root folder and rename it to `.env` with your corresponding database values (Refer to the `docker-compose.yaml` if you want to quickly run a PostgreSQL instance on your machine).

- Start up your PostgreSQL Docker container with

```bash
docker compose up -d
```

> [!NOTE]
> Alternatively, you can install PostgreSQL in your local machine manually.

### Required

- Install the project's dependencies

```bash
npm install
```

- Start the server 

```bash
npm run dev
```

Once you see the message "Server listening on http://localhost:3000" you should be good to go.

> [!NOTE]
> To confirm that everything was setup smoothly, you can install your favorite Database Management Tool and connect directly to the database to see how each table has been created and from where the Products API is fetching and creating data from.
> In case you don't have any, I would recommend using [DBeaver Community](https://dbeaver.io/download/) which a great free GUI cross-platform.