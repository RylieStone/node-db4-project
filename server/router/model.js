const db = require('../../data/db.config')

async function getById(id) {
    const data = await db('recipe as r').where('r.recipe_id', id)
    .join('steps as st', 'st.recipe_id', '=', 'r.recipe_id')
    .join('step_ingredients as sti', 'sti.step_id', '=', 'st.step_id')
    .join('ingredients as ing', 'ing.ingredient_id', '=', 'sti.ingredient')
    .select('r.recipe_id', 'r.recipe_name', 'r.created_at', 'st.step_id', 'st.step_number', 'st.step_instructions', 'sti.ingredient', 'sti.amount', 'sti.step_id', 'ing.ingredient_name')
    let step = 0
    const result = data.reduce((curr, col) => {
        if (col.step_id){
            if (step === col.step_number) {
                curr.steps[step -1].ingredients
                .push({ingredient_id: col.ingredient, ingredient_name: col.ingredient_name, amount: col.amount})
            } else {
            step++
            curr.steps.push({step_id: col.step_id, step_number: col.step_number, step_instructions: col.step_instructions, ingredients: [{ingredient_id: col.ingredient, ingredient_name: col.ingredient_name, amount: col.amount}]})
            }}
        return curr
    }, {recipe_id: data[0].recipe_id, recipe_name: data[0].recipe_name, created_at: data[0].created_at, steps: []})
    return result
}

module.exports = {
    getById
}