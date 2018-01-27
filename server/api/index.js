const router = require('express').Router();

// routes, routes, routes!

router.use('/research', require('./research'));

router.use('/email', require('./email'));


module.exports = router;
