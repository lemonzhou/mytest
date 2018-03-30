var express = require('express')
var config = require('./config/index.js')

var port = process.env.PORT || config.build.port

var app = express()

var router = express.Router()
router.get('/', function (req, res, next) {
  req.url = './index.html'
  next()
})

app.use(router)
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

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return
    }
    var uri = 'http://localhost:' + port;
    console.log('Listening at ' + uri + '\n');
});