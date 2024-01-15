# Boiler

Boiler is a vanilla express setup that's easy to spin up for machine coding rounds in Node.js

## Features

- Vanilla express Node.js server
- Added express json body parser
- Cache I/O operations via ioredis
- Database ORM via sequelize
- Testing via jest
- Linting via prettier and eslint
- Nodemon
- Script for seeding database

## Assumptions

- Dependencies like Node.js, redis are already installed via homebrew in MacOS.

## Playbook

```bash
    # Install dependencies
    npm install
```

```bash
    # Populate the database
    npm run seed
```

```bash
    # Start server
    npm start
```

```bash
    # Run tests
    npm test
```
