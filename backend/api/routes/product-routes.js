'use strict';

module.exports = function(app) {
  var productController = require('../controllers/product-controller');

  app.route('/product')
    .get(productController.getAllProducts)

  app.route('/product/:businessId')
    .get(productController.getProductById)
};