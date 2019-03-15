module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/db_TREEHOUSEDB01'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/db_TREEHOUSEDB01'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
