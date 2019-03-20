exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { id: 1, name: 'g57 is Fantastic', body:'this is the best treehouse i have ever owned!', user_id:1, treehouse_id:1},
        { id: 2, name: 'Great for the family, I recommend the sierra', body:'this is the best treehouse i have ever owned!', user_id:2, treehouse_id:2},
        { id: 3, name: 'Heisenberg is the one who knocks', user_id:3, body:'this is the best treehouse i have ever owned!', treehouse_id:3}
      ])
      .then(() => {
        return knex.raw("SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews))")
      })
    })
}
