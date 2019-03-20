exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { name: 'project1', description: 'text1'},
        { name: 'project2', description: 'text2'},
        { name: 'project3', description: 'text3'}
      ])
      .then(() => {
        return knex.raw("SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders))")
      })
    })
}
