const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'dev'
if (env === 'dev') require('../keys.js')

// function to wrap middleware:
const createApp = () => {

  // for server logs to help debugging
  app.use(morgan('dev'));

  // static middleware
  app.use(express.static(path.resolve(__dirname, '../public')))

  // requests contain a body. If you want to use it in req.body, you will need some body parsing middleware
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

  // establish api routes
  app.use('/api', require('./api'));

  // didn't match route. Send back index.html
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // didn't find what you were looking for?
  app.use(function(req, res, next){
    const err = new Error('Not found!');
    err.status = 404;
    next(err);
  })

  // last resort
  app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

}

// function wrapper around server listen:

const startListening = () => {
  app.listen(PORT, function(){
    console.log('Listening on port 3000!')
  })
}


// require.main evaluates true when run from command line ('node server/index.js')
// require.main evaluates false when it is required by another module
if (require.main === module) {
    createApp()
    startListening()
} else {
  createApp()
}
