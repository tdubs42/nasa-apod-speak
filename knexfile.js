require("dotenv")
  .config();

const sharedConfig = {
  client: 'pg',
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
  pool: {
    min: 2,
    max: 10,
  },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URI,
  },
  testing: {
    ...sharedConfig,
    connection: process.env.TESTING_DATABASE_URI,
  },
  production: {
    ...sharedConfig,
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    },
  },
}
