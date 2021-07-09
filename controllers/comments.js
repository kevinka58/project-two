const Car = require('../models/cars');

module.exports = {
    create
}

async function create(req, res) {
    try{
        const newComment = Car.findById(req.params.id);
        newComment.comment.push(req.body);
            res.redirect(`/cars/${cars._id}`);
    } catch (err){
        res.send(err)
    }
}