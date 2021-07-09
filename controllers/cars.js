const Car = require('../models/cars');

module.exports = {
    index,
    show,
    new: newCar,
    create
};

async function index(req, res) {
    try {
        const foundCars = await Car.find({});
        res.render('cars/index', {
            title: 'All Cars',
            cars: foundCars,
            })
        } catch (err) {
            res.send(err);
    }
}


async function show(req, res) {
    try{
        const showPage = await Car.findById(req.params.id);
        res.render('cars/show', {title: 'Challenger Review', cars: showPage})
    } catch (err) {
        res.send(err)
    }
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
