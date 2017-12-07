var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'final-routes' });
});

router.get('/route01', function(req, res, next) { 'use strict';
    res.render('index', { 'result': 'route01' });
});

router.get('/route02', function(req, res, next) { 'use strict';
    res.render('index', { 'result': 'route02' });
});

router.get('/route03', function(req, res, next) { 'use strict';
    res.render('index', { 'result': 'route03' });
});

module.exports = router;
