const Truck = require('../models/Truck');
const Parcel = require('../models/Parcel');


module.exports.addParcel = (req , res)=>{
    Truck.findAll().then(trucks => {
        res.render('parcel' , {trucks:trucks});
    }).catch(err => console.log(err));
    
}


module.exports.addnewParcel =(req , res) => {
    Truck.findAll({where: {name:req.body.truck}}).then(trucks => {

        const truck = trucks[0];
        // truck.weight+=parseInt(req.body.weight);
        // Truck.update({weight:truck.weight} , {where:{id:truck.id}})
        truck.createParcel({
            name:req.body.name,
            weight:req.body.weight,
            image:req.body.image
        }).then(parcel => {
            res.redirect('/');
        }).catch(err => console.log(err));
    })
} 


module.exports.updateparcelPage =(req, res) => {
    const id = req.params.id;
    Parcel.findAll({where:{id:id}}).then(data => {
        const parcel = data[0];
        res.render('updateParcel', {parcel:parcel});
    }).catch(err => console.log(err));
}

module.exports.updateParcels = (req , res) => {
    const id = req.params.id;
    Parcel.findAll({where:{id:id}}).then(parcels => {
        const parcel = parcels[0];
        console.log(parcel.TruckId);
        const updateParcel = {
            TruckId:parcel.TruckId,
            name:req.body.name,
            weight:req.body.weight,
            image:req.body.image
        }
        Parcel.update(updateParcel , {where :{id:id}})
        .then(data => {
        res.redirect('/trucks');
        })
    })
    .catch(err => console.log(err));
}


module.exports.deleteParcels = (req,res) => {
    const id = req.params.id;
    Parcel.destroy({where:{id:id}}).then(data=>{
        res.redirect('/trucks');
    }).catch(err => console.log(err));
    
}