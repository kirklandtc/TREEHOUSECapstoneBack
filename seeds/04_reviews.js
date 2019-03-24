exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { id: 1, name: 'The Vanderbilt is Incredible!', body:'This is the best treehouse I have ever owned!', user_id:1, treehouse_id:1},
        { id: 2, name: 'Great for the family, I recommend the Sierra', body:'Fantastic- my child loves it (I use it on the weekends)!', user_id:2, treehouse_id:2},
        { id: 3, name: 'The Commander has made my yard complete. Thanks Treehouse Boulder!', user_id:3, body:'Worth every penny -and then some! So many complements from the neighbors!', treehouse_id:3}
      ])
      .then(() => {
        return knex.raw("SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews))")
      })
    })
}
