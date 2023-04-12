const uuid = require('uuid')
const db = require('../../../database/index')

class ContactsRepository{

     async findAll(orderBy = 'ASC'){

        const direction = orderBy == 'DESC' ? 'DESC' : 'ASC';
        

        const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${orderBy}`)
        return rows

    }

    async findById(id){

        const  [ row ] = await db.query('SELECT * FROM contacts WHERE id = $1', [id])
        return row

    }

    async findByEmail(email){

        const [ row ] = await db.query('SELECT * FROM contacts WHERE email = $1', [email])
        return row

    }

    async create({name, email, phone}){

        const row = await db.query(
            `
            INSERT INTO contacts (name, email, phone)
            VALUES($1, $2, $3)
            RETURNING *
            `, [name, email, phone]
        )
        return row
    }

    async update(id, {name, email, phone, category_id}){

        const [ row ] = await db.query(`
            UPDATE contacts
            SET name = $1, email = $2, phone = $3
            WHERE id = $4
            RETURNING *
        `, [name, email, phone, id])
        return row

    }

    async delete(id){

        const deletaOp = await db.query('DELETE FROM contacts WHERE id = $1', [id])
        return deletaOp

    }

}

module.exports = new ContactsRepository()