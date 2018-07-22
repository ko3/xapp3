let express    = require('express'),        // call express
    app        = express(),                 // define our app using express
    bodyParser = require('body-parser'),
    mockData1  = require('./example-data/mockData1'),
    mockData2  = require('./example-data/mockData2');
let liveNewsVideosData  = require('./example-data/liveNewsVideosData');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

let port = 3001; //process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });
});
//add path '/*' to allow all the variables
router.get('/hello1', (req,res) => {
    setTimeout(() => {
      res.setHeader('Content-Type','application/json');
      res.status(200).send(mockData1);
    }, 500);
});

router.get('/hello2', (req,res) => {
    setTimeout(() => {
      res.setHeader('Content-Type','application/json');
      res.status(200).send(mockData2);
    }, 500);
});

router.get('/data/videos/news/live', (req,res) => {
    setTimeout(() => {
      res.setHeader('Content-Type','application/json');
      res.status(200).send(liveNewsVideosData);
    }, 200);
});

router.post('/helloPost', (req,res) => {
    setTimeout(() => {
      res.setHeader('Content-Type','application/json');
      res.status(200).send(transactions[req.params.transaction]);
    }, 500);
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port)
