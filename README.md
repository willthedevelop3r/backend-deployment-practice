# Starter: Backend Deployment

This is starter code for the Back End Deployment module. Follow the instructions below to get everything up and running.

This repo was adapted from [this repository](https://github.com/Thinkful-Ed/starter-back-end-deployment) to work with Vercel's most recent updates.

## Instructions

1. Fork and clone this repository.
1. Run `cp .env.sample .env`.
1. Update your `.env` file with a connection URL to your database.
1. Run `npm install`.
1. Run `npx knex migrate:latest`.
1. Run `npx knex seed:run`.
