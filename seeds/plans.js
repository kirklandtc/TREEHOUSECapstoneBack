exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('plans').del()
    .then(function () {
      // Inserts seed entries
      return knex('plans').insert([
        {name: 'plan1', description: 'treehouse1'},
        {name: 'plan2', description: 'treehouse2'},
        {name: 'plan3', description: 'treehouse3'}
      ])
      .then(() => {
        return knex.raw("SELECT setval('plans_id_seq', (SELECT MAX(id) FROM plans))")
      })
    })
}
