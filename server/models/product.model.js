// import mongoose to build the model 
const mongoose = require('mongoose');

// the model - the rules the entries need to follow
const ProductSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
    
}, {timestamps: true})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product