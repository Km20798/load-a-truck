const route = require('express').Router();
const truckController = require('../controllers/TruckController');

route.get('/addTruck' , truckController.getTruckPage);
route.get('/trucks' , truckController.getAllTrucks);
route.post('/trucks' , truckController.addTruck);
route.get('/trucks/:id' , truckController.getAllParcels);
route.get('/trucks/:id/update' , truckController.getupdatePage);
route.post('/trucks/:id' , truckController.updateTruck);
route.get('/trucks/:id/delete' , truckController.delete);   
route.get('/trucks/:id/unload' , truckController.unload);
route.get('/trucks/:id/detailes' , truckController.detailes);
route.post('/trucks/:id/getData' , truckController.getData);



module.exports = route;