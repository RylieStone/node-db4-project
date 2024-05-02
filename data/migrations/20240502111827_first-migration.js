/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('recipe', table => {
        table.increments('recipe_id')
        table.string('recipe_name').notNullable().unique()
        table.string('created_at').notNullable()
    })
    .createTable('steps', table => {
        table.increments('step_id')
        table.integer('step_number').notNullable()
        table.string('step_instructions', 256).notNullable()
        table.integer('recipe_id').notNullable().unsigned().references('recipe_id').inTable('recipe')
    })
    .createTable('step_ingredients', table => {
        table.increments('step_ingredients_id')
        table.integer('ingredient').notNullable().unsigned().references('ingredient_id').inTable('ingredients')
        table.string('amount').notNullable()
        table.integer('step_id').notNullable().unsigned().references('step_id').inTable('steps')
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name')
    }) 
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('recipe')
    .dropTableIfExists('steps')
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
};
