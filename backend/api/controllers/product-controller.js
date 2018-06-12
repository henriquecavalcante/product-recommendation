'use strict';

var mongoose = require('mongoose'),
  Product = mongoose.model('Product');

exports.getAllProducts = function(req, res) {
  Product.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.getProductById = function(req, res) {
  Product.find({businessId:req.params.businessId}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};