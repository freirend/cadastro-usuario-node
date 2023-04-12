const { request } = require('express')
const ContactsRepository = require('../controller/repositories/ContactsRepository')

class ContactController{

    async index(req, res){

        const { orderBy } = req.query
        
        const contacts = await ContactsRepository.findAll(orderBy)

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

    async store(req, res){

        const{ name, email, phone } = req.body

        if (!name){
            res.status(404).json({ error: 'Name is Required' })
        }

        const contactExist = await ContactsRepository.findByEmail(email)

        if (contactExist){
            return res.status(404).json({ error: 'This email is already in use' })
        }

        const contact = await ContactsRepository.create({ name, email, phone })

        res.json(contact)

    }

    async update(req, res){

        const { id } = req.params
        const { name, email, phone } = req.body

        const contactExist = await ContactsRepository.findById(id)

        if(!contactExist){
            res.status(404).json({ error: 'User Not Found' })
        }

        if (!name){
            res.status(404).json({ error: 'Name is Required' })
        }

        const existEmail = await ContactsRepository.findByEmail(email)

        if (existEmail && existEmail.id != id){
            return res.status(404).json({ error: 'This email is already in use' })
        }

        const contact = await ContactsRepository.update(id, {name, email, phone})

        res.json(contact)

    }

    async delete(req, res){

        const { id } = req.params

        const contact = await ContactsRepository.findById(id)

        await ContactsRepository.delete(id)

        res.sendStatus(204)

    }

}

module.exports = new ContactController()