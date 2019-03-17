
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { name: 'project1', description: 'text1'},
        { name: 'project2', description: 'text2'},
        { name: 'project3', description: 'text3'}
      ])
      .then(() => {
        return knex.raw("SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects))")
      })
    })
}
