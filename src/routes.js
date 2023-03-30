const express = require('express')
const ContactController = require('./app/controller/ContactController')
const router = express.Router()

router.get('/contacts', ContactController.index)
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete)
router.post('/contact', ContactController.store)

module.exports = router