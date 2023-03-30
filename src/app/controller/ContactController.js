const ContactsRepository = require('../controller/repositories/ContactsRepository')

class ContactController{

    async index(req, res){
        
        const contacts = await ContactsRepository.findAll()

        res.json(contacts)
    }

    async show(req, res){

        const { id } = req.params

        const contact = await ContactsRepository.findById(id)

        if (!contact){
            res.status(400).json({ error: 'User not found' })
        }

        res.json(contact)

    }

    store(){

    }

    update(){

    }

    async delete(req, res){

        const { id } = req.params

        const contact = await ContactsRepository.findById(id)

        if(!contact){
            res.status(400).json({ error:'Contact Not Found' })
        }

        await ContactsRepository.delete(id)

        res.sendStatus(204)

    }

}

module.exports = new ContactController()