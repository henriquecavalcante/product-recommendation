'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    businessId: {
        type: String,
    },
    name: {
        type: String,
    },
    imageName: {
        type: String,
    },
    detailUrl: {
        type: String,
    },
    price: {
        type: String,
    },
    oldPrice: {
        type: String,
    },
    paymentCondition: {
        type: String,
    }
});

module.exports = mongoose.model('Product', ProductSchema);