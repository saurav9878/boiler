const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.NODE_ENV === 'test') {
  sequelize = new Sequelize('sqlite::memory:');
} else {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3',
  });
}

module.exports = { sequelize };
