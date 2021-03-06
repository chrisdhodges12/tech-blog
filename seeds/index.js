const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/config');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedPosts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
