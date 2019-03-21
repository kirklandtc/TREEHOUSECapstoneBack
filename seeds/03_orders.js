exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { id: 1, user_id: 1, treehouse_id:1},
        { id: 2, user_id: 2, treehouse_id:2},
        { id: 3, user_id: 3, treehouse_id:3},

      ])
      .then(() => {
        return knex.raw("SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders))")
      })
    })
}
