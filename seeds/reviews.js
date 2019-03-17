exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { name: 'review1', description: 'input1'},
        { name: 'review2', description: 'input2'},
        { name: 'review3', description: 'input3'}
      ])
      .then(() => {
        return knex.raw("SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews))")
      })
    })
}
