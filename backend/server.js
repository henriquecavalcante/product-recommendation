var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/product-model'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/product-routes');
routes(app);

app.listen(port);

console.log('Reset product collection')
Product.collection.drop();

var json_data = require('./mock/products.json');
Product.collection.insertMany(json_data, function(err,r){
  console.log('Inserted ' + r.insertedCount + ' products')
});

console.log('Product Recommendation System RESTful API server started on: ' + port);