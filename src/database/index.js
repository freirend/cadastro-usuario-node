const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'eu',
    password: 'eu',
    database: 'mycontacts',
})

client.connect()

exports.query = async (query, values) => {

    const result = await client.query(query, values)
    return result.rows

}