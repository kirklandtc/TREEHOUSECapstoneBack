
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews',(table)=>{
    table.increments('id')
    table.string('name').notNullable()
    table.text('body').notNullable()
    table.integer('user_id')
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.integer('treehouse_id')
    table.foreign('treehouse_id').references('treehouse.id').onDelete('CASCADE')
    table.timestamps(true, true)

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews')

};
