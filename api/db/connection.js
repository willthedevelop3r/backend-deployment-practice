const env = process.env.NODE_ENV || 'development';
const config = require('../../knexfile')[env];
const knex = require('knex')(config);

// console.log('/////', env);

module.exports = knex;
