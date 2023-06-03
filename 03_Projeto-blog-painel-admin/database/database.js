const Sequelize = require("sequelize");

const connection = new Sequelize('blogadmin', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection;