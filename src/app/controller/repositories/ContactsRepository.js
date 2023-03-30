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

        return new Promise((resolve) => {
            resolve(contacts.find((contact) => contact.id == id))
        })

    }

    delete(id){

        return new Promise((resolve) => {
            resolve(contacts = contacts.filter((contact) => contact.id != id))
        })

    }

}

module.exports = new ContactsRepository()