
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plans', (table) => {
    table.increments()
    table.text('description').notNullable()
    table.integer('recipient').unsigned()
    table.foreign('recipient').references('users.id')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plans')
};
