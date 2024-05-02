const db = require('./../../data/db.config')
async function checkid (req, res, next) {
    const recipe = await db('recipe').where('recipe_id', req.params.id)
    console.log(recipe)
    if (recipe.length === 1) {
        next()
    } else {
        res.status(404).json({message: 'recipe with specified id does not exist'})
    }
}
module.exports = {
    checkid
}