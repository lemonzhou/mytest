var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var appData = require('./data.json')
var products = appData.products
var category = appData.category
var apiRoutes = express.Router()
app.use('/api', apiRoutes)
app.get('/api/products', (req, res) => {
    res.json({
        errno: 0,
        data: products
    })
})
app.get('/api/category', (req, res) => {
    res.json({
        errno: 0,
        data: category
    })
})

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {

if (err) {
    console.log(err);
    return
}
console.log('Listening at http://localhost:' + port + '\n')
});