const { Sequelize, DataTypes } = require('sequelize')

//conection to DB
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'juan',
    port: 5432,
    database:'exercise1'
});


module.exports = { db, DataTypes }