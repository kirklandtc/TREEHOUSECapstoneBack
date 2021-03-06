'use  strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('treehouses', (table) => {
    table.increments('id')
    table.string('model').notNullable().unique()
    table.string('description').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('treehouses')
}
