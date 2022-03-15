const db = require('../util/database');
const Truck = require('../models/Truck');
const Parcel = require('../models/Parcel');
const { Op } = require('sequelize')


module.exports.getTruckPage = (req , res) => {
    res.render('add');
}

module.exports.addTruck = (req , res) => {
    Truck.create({
        name:req.body.name,
        image:req.body.image , 
        weight:req.body.weight
    }).then(trunk => {
        res.redirect('/');
    }).catch(err => console.log(err));
}

module.exports.getAllTrucks = (req , res) => {
    Truck.findAll()
    .then(trucks => {
       
        res.render('home' , {trucks:trucks})
    }).catch(err => console.log(err));
}



module.exports.getAllParcels = ( req , res) => {
    const id = req.params.id;
    Parcel.findAll({where:{TruckId:id}})
    .then(parcels => {

        res.render('parcels' , {parcels:parcels})
    }).catch(err => console.log(err));
}


module.exports.getupdatePage = (req , res) => {
    const id = req.params.id;
    Truck.findAll({where:{id:id}})
    .then(trucks=>{
        const truck = trucks[0];
        res.render('updateTruck', {truck:truck});
    }).catch(err=> console.log(err));
}


module.exports.updateTruck= (req , res) => {
    const truck = {
        name:req.body.name,
        image:req.body.image,
        weight:req.body.weight
    }
    const id = req.params.id;
    Truck.update(truck , {where:{id:id}})
    .then(data => {
        res.redirect('/trucks');
    }).catch(err => console.log(err));
}

module.exports.delete = (req , res) => {
    const id = req.params.id;
    Parcel.findAll({where:{TruckId:id}})
    .then(parcels => {
        parcels.forEach(parcel => {
            Parcel.destroy({where:{id:parcel.id}});    
        });

    }).then(data => {
        Truck.destroy({where:{id:id}})
            .then(data => {
                res.redirect('/trucks');
            })
    })
    .catch(err => console.log(err));
}

module.exports.unload = (req,res) =>{
    const id = req.params.id;
    Parcel.findAll({where:{TruckId:id}}).then(parcels => {
        parcels.forEach(parcel => {
            Parcel.update({TruckId:null} , {where:{id:parcel.id}})
        });
    })
    .then(data => {
        res.redirect('/trucks');
    }).catch(err => res.send(err));
}


module.exports.detailes = (req , res) => {
    const id = req.params.id;
    Truck.findAll({where:{id:id}}).then(trucks => {
        const truck = trucks[0];
        Parcel.findAll({where:{TruckId:truck.id}}).then(parcels=>{
            res.render('truckDisplay',{parcels:parcels , truck:truck});
        })
    })
    
}

module.exports.getData=(req,res)=>{
    const date = new Date(req.body.search);
    // const date = "2022-03-15 13:36:08"
    console.log(date);
    const id = req.params.id;
    Truck.findAll({where:{id:id}}).then(trucks => {
        return trucks[0];
    }).then(truck => {
        Parcel
        .findAll({where : {"createdAt" : {[Op.lte] : date }}})  
        .then(data => {
            const parcels = []
            data.forEach(parcel => {
                if(parcel.TruckId === truck.id){
                    parcels.push(parcel);   
                }
            })
            res.render('detailes' , {parcels:parcels , truck:truck});
        })
    })
    
}