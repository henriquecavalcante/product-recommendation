'use strict';

module.exports = function (app) {
    var productController = require('../controllers/product-controller');

    app.route('/api/product')
        .get(productController.getAllProducts);

    app.route('/api/product/:businessId')
        .get(productController.getProductById);
};