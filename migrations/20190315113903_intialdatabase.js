exports.up = function(knex, Promise) {
  return knex.schema.createTable('table_name', function(table){
    table.increments()
    table.string('sample')
    // table.integer('other_table_id').references('other_table.id').onDelete('CASCADE')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('table_name')
}
