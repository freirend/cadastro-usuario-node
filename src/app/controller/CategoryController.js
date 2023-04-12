const CategoriesRepository = require('../controller/repositories/CategoriesRepository')

class CategoryController {

    index(req, res) {
        res.send('Ok, index')
    }

    async store(req, res) {
        const { name } = req.body
        if (!name){
            res.status(404).json({ error: 'Name is Required' })
        }
        const category = await CategoriesRepository.create({name})
        res.json(category)
    }

}

module.exports = new CategoryController()