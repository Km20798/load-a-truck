const express = require('express');
const app = express();
const TruckRouter = require('./routes/TruckRouter');
const ParcelRouter = require('./routes/ParcelRouter');
const Trunk = require('./models/Truck');
const Parcel = require('./models/Parcel');
const sequelize = require('./util/database');
const bodyParser = require('body-parser');
const session = require('express-session');
const {v4:uuidv4} = require('uuid');

app.set('view engine' , 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(
    session({
    secret: uuidv4(),
    saveUninitialized: true,
    resave: false
    })
);


app.get('/' , (req , res) => {
    res.status(200).redirect('/trucks');
    // res.status(200).send('welcoe');
})
app.use(TruckRouter);
app.use(ParcelRouter);



Parcel.belongsTo(Trunk);
Trunk.hasMany(Parcel);


// sequelize.sync({force:true})
sequelize.sync()
.then(data => {
   app.listen(3000); 
}).catch(err => console.log(err));

