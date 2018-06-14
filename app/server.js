var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Product = require('./api/models/product-model'),
    bodyParser = require('body-parser'),
    request = require('request');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/linx');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var routes = require('./api/routes/product-routes');
routes(app);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    request('http://localhost:3000/api/product/1768629', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            res.render('index', {
                product: info
            })
        } else {
            console.log(error);
        }
    });
})

app.listen(port);
console.log('Product Recommendation System RESTful API server started on: ' + port);

try {
    Product.collection.drop();
    console.log('Reset Product collection');
} catch (error) {
    console.log(error);
}

var json_data = require('./mock/products.json');
Product.collection.insertMany(json_data, function (err, r) {
    console.log('Created ' + r.insertedCount + ' products');
});