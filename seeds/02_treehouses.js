
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('treehouses').del()
    .then(function () {
      // Inserts seed entries
      return knex('treehouses').insert([
        {id: 1, model: 'g57',description:'Basic Model'},
        {id: 2, model: 'Sierra',description:'Upgraded Model'},
        {id: 3, model: 'Heisenberg',description:'Premium Model'},
      ])
      .then(() => {
        return knex.raw("SELECT setval('treehouses_id_seq', (SELECT MAX(id) FROM treehouses))")
      })
    })
}
