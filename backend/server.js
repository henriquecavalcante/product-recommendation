var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/product-model'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/linx');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/product-routes');
routes(app);

app.listen(port);
console.log('Product Recommendation System RESTful API server started on: ' + port);

if (Product.collection.count()){
    Product.collection.drop();
    console.log('Reset product collection')
}

var json_data = require('./mock/products.json');
Product.collection.insertMany(json_data, function(err,r){
  console.log('Created ' + r.insertedCount + ' products')
});