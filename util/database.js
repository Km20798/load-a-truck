const sequelize = require('sequelize');

const db = new sequelize("parcel" , "root" , "root" , {dialect:'mysql' , host:'localhost'});

module.exports = db;