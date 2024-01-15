const app = require('./app');
const { redis } = require('../datastores/redis');
const { User } = require('./models/user');

/**
 * This is a health check endpoint to check whether cache and database connections
 * are working or not
 */
app.get('/', async (req, res) => {
  await redis.set('healthy', true, 'EX', 10);
  const cachedValue = await redis.get('healthy');

  const storedValue = await User.findAll({
    where: {
      id: 1,
    },
  });

  if (cachedValue && storedValue) {
    res.status(200);
  } else {
    res.status(500);
    res.send();
  }
});

/**
 * This is a sample POST request that creates a user
 */
app.post('/users', async (req, res) => {
  try {
    const { name } = req.body;

    const user = await User.create({
      name,
    });

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

/**
 * This is a sample GET request that retrieves user information by id
 */
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const users = await User.findAll({
      where: {
        id: parseInt(id),
      },
    });

    if (users.length) {
      res.send(users[0]);
    }

    throw new Error('user not found');
  } catch (error) {
    console.log(error);
    res.status(403);
    res.send();
  }
});
