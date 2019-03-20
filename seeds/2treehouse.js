
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('treehouse').del()
    .then(function () {
      // Inserts seed entries
      return knex('treehouse').insert([
        {id: 1, model: 'g57',description:'Basic Model'},
        {id: 2, model: 'Sierra',description:'Upgraded Model'},
        {id: 3, model: 'Heisenberg',description:'Premium Model'},
      ])
      .then(() => {
        return knex.raw("SELECT setval('treehouse_id_seq', (SELECT MAX(id) FROM treehouse))")
      })
    })
}
