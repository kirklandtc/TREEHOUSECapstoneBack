var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET home page. */
router.get('/', function(req, res, next) {

  // res.render('index', { title: 'Express' });
  knex('users')
  .then( data =>{
    res.send(data)
  })
});


//List (get all of the resource)
router.get('/', function(req, res, next) {
  knex('users')
  .where('id', req.params.id)
  .first()
  .then( data => {
    res.send(data)
  })
  .catch(err => {
    next(err)
  })
})

//Read (get one of the resource)
router.get('/:id/orders', function(req, res, next) {
   knex('users')
  .select('firstname','lastname')
  .where('users.id', req.params.id)
  .join('orders','users.id')
  .then(data => {
    var userWithOrder = {
    firstname: data[0].name,
    lastname: data[0].order,
    orders: data.map(userInfo => userInfo.description)
  }
  res.send(userWithOrder)
  })
})

//Create (create one of the resource)
router.post('/', function(req,res,next){
  knex('users')
  .insert(req.body)
  .returning('name')
  .then( data => {
    console.log(data);
    res.send(data)
  })
  .catch(err => {
    next(err)
  })
})

//Update (update one of the resource)
router.patch('/:id', function(req,res,next){
  console.log("body and id:", req.body, req.params.id);
  knex('users')
  .where('id', req.params.id)
  .update(req.body)
  .returning('*')
  .then( data => {
    res.send(data)
  })
  .catch(err => {
    next(err)
  })

})

//Delete (delete one of the resource)
router.delete('/:id', function(req, res, next) {
  knex('users')
  .where('id', req.params.id)
  .returning('*')
  .del()
  .then( data => {
    res.send(data[0])
  })
  .catch(err => {
    next(err)
  })
})
module.exports = router;
