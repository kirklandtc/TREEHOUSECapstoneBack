module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/db_tree'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/db_treetest'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
