const Car = require('../models/cars');

module.exports = {
    show,
    new: newCar,
    create
};


function show(req, res) {
    Car.findById(req.params.id, function(err, cars){
        res.render('cars/show', {title: 'Challenger Review', cars})
    })
}

function newCar(req, res) {
    res.render('cars/new', {
        title: 'Add Cars'
    })
}

async function create(req, res) {
    try{
        const newCar = await Car.create(req.body);
        res.redirect(`/cars/${newCar._id}`);
    } catch (err) {
        res.send(err)
    }
}
