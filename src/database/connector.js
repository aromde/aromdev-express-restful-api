import Sequelize from 'sequelize';
import { DB_SETTINGS } from '../settings'

const pool = new Sequelize(DB_SETTINGS.development.name, DB_SETTINGS.development.username, DB_SETTINGS.development.password, {
    host: DB_SETTINGS.development.host,
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

pool.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err.parent);
  });

export default pool;

