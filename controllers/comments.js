const Car = require('../models/cars');

module.exports = {
    create,
    comment
}

function create(req, res) {
Car.findById(req.params.id, function(err, car) {
        car.comment.push(req.body);
        car.save(function(err) {
            res.redirect(`/cars/${car._id}`);
        })
    })
}

function comment(req, res) {
    
}