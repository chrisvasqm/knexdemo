# Knex Demo

Demonstration project to show how to use `Express` and `Knex` to build a Web Service.

## Prerequisites

Before you start coding away, make sure to install:

1. `Git`
2. `Node.js`
3. `Docker`

## Knex Setup

Due to the way that `Knex` works, there's a specific set of rules we need to follow:

1. There needs to be a file named `knexfile.js` somewhere in the project, preferably in the `/` root folder.
2. This `knexfile.js` sets up an `object` with a specific set of properties depending on the Database Provider your project uses (in this case PostgreSQL).
3. The `knexfile.js` configuration `object` must point to the folder relative to its path, where the `migrations` folder will be located (in this case, the `/migrations`).
4. At the top of the `knexfile.js`, we must call `dotenv` and configure it. In case you move it to a subfolder, you must pass an object to the `.config({ path: <path> })` method providing the path back to the `/` folder where your `.env` should be.
5. In order to have migrations be executed automatically on each server startup, we must call the `.migrate.latest()` method on the `knex` instance, which returns a `Promise`, so we must handle both success and failure scenarios (check how it's done in `knexfile.js`).

> [!WARNING]
> If you plan on **adding a new migration** while the server is running, make sure to **stop** your `nodemon` execution before doing `knex migrate:make <migration-name>`.

## Getting started

- Make a copy of the `.env.example` file found at the `/` root folder and rename it to `.env` with your corresponding database values.

### Optional

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

Once you see the message "Server listening on http://localhost:3000" you should be able to send HTTP request to the available endpoints with [Postman](https://www.postman.com/) or any tool for your choice.

> [!TIP]
> To confirm everything is running fine, you can install [DBeaver Community](https://dbeaver.io/download/) which is a great free GUI cross-platform, or your preferred tool.