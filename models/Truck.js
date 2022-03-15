const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Truck = sequelize.define('Truck',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:Sequelize.STRING,
    image:Sequelize.STRING,
    weight:{
        type:Sequelize.DOUBLE
    }
});

module.exports = Truck;