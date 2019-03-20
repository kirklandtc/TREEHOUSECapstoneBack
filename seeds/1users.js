exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id:1, name:'Phil Borgenicht', email:'phil@gmail,com', password:'pugdog', address:'123 Main St.', address2:'', city:'Longmont', state:'CO', zip:'80504'},
        {id:2, name:'Thomas Kirkland', email:'tom@gmail.com', password:'cat', address:'123 Simms st.', address2:'', city:'Boulder', state:'CO', zip:'80020'},
        {id:3, name:'Dory Tater', email:'dory@pug.com', password:'pug1', address:'15 Main St.', address2:'', city:'Longmont', state:'CO', zip:'80504'}
      ])
      .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
      })
    })
}
