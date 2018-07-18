let express    = require('express'),        // call express
    app        = express(),                 // define our app using express
    bodyParser = require('body-parser'),
    mockData1  = require('./example-data/mockData1'),
    mockData2  = require('./example-data/mockData2');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = 3001; //process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
//add path '/*' to allow all the variables
router.get('/hello', (req,res) => {
    setTimeout(() => {
      res.setHeader('Content-Type':'application/json');
      res.status(200).send(mockData1);
    }, 500);
});

router.post('/helloPost', (req,res) => {
    setTimeout(() => {
      res.setHeader('Content-Type':'application/json');
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
console.log('Magic happens on port ' + port);

//https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
//add "scripts": {
//    	"start": "node api-server.js"
//	}
//"dependencies": {
//        "express": "~4.0.0",
//       "body-parser": "~1.0.1"
//    },
