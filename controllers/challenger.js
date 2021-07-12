const Car = require('../models/cars');

module.exports = {
    show,
    new: newCar,
    create,
    index
};
async function index(req, res) {
    try {
        const foundCars = await Car.find({});
        res.render('challenger/index', {
            title: 'All Cars',
            cars: foundCars,
            })
        } catch (err) {
            res.send(err);
    }
}

function show(req, res) {
    Car.findById(req.params.id, function(err, cars){
        res.render('cars/challenger/show', {title: 'Challenger Review', cars})
    })
}

function newCar(req, res) {
    res.render('cars/challenger/new', {
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
