var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/movieList', controller.movieList.get);

router.post('/movieList', controller.movieList.post);


module.exports = router;