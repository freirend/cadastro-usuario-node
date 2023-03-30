const uuid = require('uuid')

let contacts = [
    {
        id: uuid.v4(),
        name: "Lucas",
        email: "lucas@mail.com",
        phone: "21 97667-8756",
        category_id: uuid.v4(),
    },
    {
        id: uuid.v4(),
        name: "Naftali",
        email: "naftali@mail.com",
        phone: "21 97007-8756",
        category_id: uuid.v4(),
    },
]

class ContactsRepository{

    findAll(){

        return new Promise((resolve) => {
            resolve(contacts)
        })

    }

    findById(id){

        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.id == id),
        ))

    }

    findByEmail(email){

        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.email == email),
        ))

    }

    delete(id){

        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id != id)
            resolve()
        })

    }

    create({name, email, phone}){

        return new Promise((resolve) => {
            
            const newContact = {
                id: uuid.v4(),
                name,
                email,
                phone,
                category_id: uuid.v4(),
            }

            contacts.push(newContact)
            resolve(newContact)

        })

    }

    update(id, {name, email, phone, category_id}){

        return new Promise((resolve) => {
            
            const updateContact = {
                id,
                name,
                email,
                phone,
                category_id,
            }

            contacts = contacts.map((contact) => (
                contact.id == id ? updateContact : contact ),
            )

            resolve(updateContact)

        })

    }

}

module.exports = new ContactsRepository()