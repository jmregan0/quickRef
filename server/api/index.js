const router = require('express').Router();

// routes, routes, routes!

router.use('/research', require('./research'));


module.exports = router;
