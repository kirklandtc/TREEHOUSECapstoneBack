var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET home page. */
router.get('/', function(req, res, next) {

  // res.render('index', { title: 'Express' });
  return knex('treehouses')
  .then( data =>{
    res.status(200).send(data)

  })
});



module.exports = router;
