const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress','piterboscolo','Clarinh4*',{
    host: 'mysql669.umbler.com',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;