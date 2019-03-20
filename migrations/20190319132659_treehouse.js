'use  strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('treehouse', (table) => {
    table.increments()
    table.string('model').notNullable()
    table.boolean('description').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('treehouse')
}
