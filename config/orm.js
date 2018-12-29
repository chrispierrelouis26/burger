const Sequelize = require('sequelize')
console.log(process.env.database);
const sequelize = new Sequelize(process.env.MYSQL_DBNAME, process.env.MYSQL_USER, process.env.MYSQL_KEY, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
const BurgerModel = require('../models/burger')
const burger = BurgerModel(sequelize, Sequelize);

module.exports = burger;