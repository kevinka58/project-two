const Car = require('../models/cars');


module.exports = {
    index,
    show,
    new: newCar,
    create,
};

async function index(req, res) {
    try {
        const foundCars = await Car.find({});
        res.render('cars/index', {
            title: 'DODGE',
            cars: foundCars,
            })
        } catch (err) {
            res.send(err);
    }
}

function show(req, res) {
    Car.findById(req.params.id, function(err, cars){
        res.render('cars/show', {
            title: (`${cars.model} Review`), 
            cars,

            }
        )
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

