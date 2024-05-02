const express = require('express')
const router = express.Router()
const middleware = require('./middleware')
const method = require('./model')
router.get('/:id', middleware.checkid, async (req, res) => {
 const {id} = req.params
const recipe = await method.getById(id)
try {
    res.status(200).json(recipe)
} catch {
    res.status(422).json({message: 'server couldnt proccess, please try again'})
}
})

module.exports = router