const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Parcel = sequelize.define('Parcel',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:Sequelize.STRING,
    weight:{
        type:Sequelize.INTEGER , 
        allowNull:false
    },
    image:Sequelize.STRING
    
});

module.exports = Parcel;