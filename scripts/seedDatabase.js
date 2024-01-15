const { User } = require('../src/models/user');

/**
 * Seed databases before use in development so that tables are created
 */
seed();

async function seed() {
  await User.sync({ force: true });

  await User.create({
    id: 1,
    name: 'Test user',
  });
}
