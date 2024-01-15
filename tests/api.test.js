const request = require('supertest');
const app = require('../src/server');
const { User } = require('../src/models/user');

async function resetDatabase() {
  // create tables in in-memory test DB
  await User.sync({ force: true });
}

beforeAll(async () => {
  await resetDatabase();
});

describe('sample test suite', () => {
  it('same test case', () => {
    expect(true);
  });
});
