require('dotenv').config();
const {
  NODE_ENV = 'development',
  DEVELOPMENT_DATABASE_URL,
  PRODUCTION_DATABASE_URL,
} = process.env;

// console.log(NODE_ENV, '/////////////');

const URL =
  NODE_ENV === 'production'
    ? PRODUCTION_DATABASE_URL
    : DEVELOPMENT_DATABASE_URL;

// console.log('///////', URL);

module.exports = {
  development: {
    client: 'postgresql',
    connection: URL,
    migrations: {
      directory: __dirname + '/api/db/migrations',
    },
    seeds: {
      directory: __dirname + '/api/db/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: URL,
    migrations: {
      directory: __dirname + '/api/db/migrations',
    },
    seeds: {
      directory: __dirname + '/api/db/seeds',
    },
  },
};
