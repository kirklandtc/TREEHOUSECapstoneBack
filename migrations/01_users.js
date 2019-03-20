
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users',(table)=>{
    table.increments('id').notNullable()
    table.string('name').notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('address').notNullable()
    table.string('address2').defaultTo('')
    table.string('city').notNullable()
    table.string('state').notNullable()
    table.string('zip').notNullable()
    table.timestamps(true, true)

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')

};
