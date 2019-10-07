/* Create Express application */
var express      = require("express");
var app          = express();
var errorHandler = require('errorhandler');
var logger       = require('morgan');
var cors         = require('cors');

// var httpMocks = require('node-mocks-http');

var applicationRoot = __dirname.replace(/\\/g,"/"),
  ipaddress         = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  port              = process.env.PORT || 3001;
  mockRoot          = applicationRoot + '/test/mocks/api',
  mockFilePattern   = '.json',
  mockRootPattern   = mockRoot + '/**/*' + mockFilePattern,
  apiRoot           = '/api/v1',
  fs                = require("fs"),
  glob              = require("glob");

  console.log('PORT: ', port)

/* Configure a simple logger and an error handler. */
if ('development' == app.get('env')) {
    app.use(logger());
    app.use(errorHandler({ dumpExceptions: true, showStack: true }));
}

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    };
    next();
});



/* Read the directory tree according to the pattern specified above. */
var files = glob.sync(mockRootPattern);

/* Register mappings for each file found in the directory tree. */
if(files && files.length > 0) {
  files.forEach(function(fileName) {

    var mapping = apiRoot + fileName.replace(mockRoot, '').replace(mockFilePattern,'').replace('/v1','');
    console.log('######> ', apiRoot, fileName, mockRoot, mockFilePattern)

    var methods = ['get','post','put','delete','options'];
    methods.forEach(method =>{
        app[ method ](mapping, (req, res) => {
            var data =  fs.readFileSync(fileName, 'utf8');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(data);
            res.end();
        });
    })
    

    console.log('Registered mapping: %s -> %s', mapping, fileName);
  })
} else {
    console.log('No mappings found! Please check the configuration.');
}

/* Start the API mock server. */
console.log('Application root directory: [' + applicationRoot +']');
console.log('Mock Api Server listening: [http://' + ipaddress + ':' + port + ']');
app.listen(port, ipaddress);