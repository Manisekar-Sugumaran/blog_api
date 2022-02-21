require('dotenv').config()
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 9,
      min: 0,
      idle: 120000,
    },
  });

  sequelize.authenticate()
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

module.exports = sequelize; 