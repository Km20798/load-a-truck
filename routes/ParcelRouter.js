const route = require('express').Router();
const parcelController = require('../controllers/ParcelController');

route.get('/addParcle' , parcelController.addParcel);
route.post('/parcels' , parcelController.addnewParcel);
route.get('/parcels/:id/update' , parcelController.updateparcelPage);  
route.post('/parcels/:id' , parcelController.updateParcels);  
route.get('/parcels/:id/delete' , parcelController.deleteParcels);


module.exports = route;