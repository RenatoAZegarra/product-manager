
// import the model here
const Product = require("../models/product.model")


// READ ALL
module.exports.readAll = (req, res) => {
    Product.find()
        .then((allDaProducts) => {
            res.json(allDaProducts)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// READ ONE
module.exports.readOne = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json(oneSingleProduct)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// CREATE
module.exports.create = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json(newlyCreatedProduct)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

// UPDATE
module.exports.update = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedProduct => {
            res.json(updatedProduct)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

// DELETE
module.exports.delete = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}