const Car = require('../models/cars');

module.exports = {
    create,
    delete: deleteCar,
    update,
    edit
}

function create(req, res) {
Car.findById(req.params.id, function(err, car) {
        car.comment.push(req.body);
        car.save(function(err) {
            res.redirect(`/cars/${car._id}`);
        })
    })
}

function edit(req, res) {
    Car.findById(req.params.id, function(err, cars){
        res.render('cars/edit', {
            title: (`${cars.model}: Update Your Comment`), 
            cars
            }
        )
    }) 
}

// function update(req, res) {
//     Car.updateMany(req.params.id, req.body);
//     req.body.other ? true : false;
//             res.redirect(`/cars`);
// }

function update(req, res) {
    Car.findById(req.params.id, function(err, car) {
    car.comment.splice(req.params.index, 1, req.body)
    car.save(function(err) {
        res.redirect(`/cars/${car._id}`);
    })
})
}

function deleteCar(req, res) {
Car.findById(req.params.id, function(err, car) {
    car.comment.splice(req.params.index, 1,)
    car.save(function(err) {
     res.redirect(`/cars/${car._id}`);
         })
    })
}