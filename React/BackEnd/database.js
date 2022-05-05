const DB = require('sequelize');
const db = new DB('states','gaugau','GauGau@123',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = db; 





