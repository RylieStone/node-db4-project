/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipe').insert({recipe_name: 'grilled chicken', created_at: '5/2/2024'})
  await knex('steps').insert({step_number: 1, step_instructions: 'season the meat', recipe_id: 1})
  await knex('steps').insert({step_number: 2, step_instructions: 'grill the meat', recipe_id: 1})
  await knex('step_ingredients').insert({ingredient: 4, amount: '1 pound', step_id: 1})
  await knex('step_ingredients').insert({ingredient: 2, amount: '1 tsp', step_id: 1})
  await knex('step_ingredients').insert({ingredient: 3, amount: '1 tsp', step_id: 1})
  await knex('step_ingredients').insert({ingredient: 1, amount: '1 tsp', step_id: 2})
  await knex('ingredients').insert({ingredient_name: 'steak seasoning'})
  await knex('ingredients').insert({ingredient_name: 'salt'})
  await knex('ingredients').insert({ingredient_name: 'pepper'})
  await knex('ingredients').insert({ingredient_name: 'chicken'})
};
