
exports.up = function(knex, Promise) {
  return knex.schema.createTable('orders',(table)=>{
    table.increments()
    table.string('name')
    table.text('description')
    table.datetime('date').defaultTo(knex.fn.now())

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders')

};