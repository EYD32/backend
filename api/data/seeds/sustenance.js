/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const gabagool = {s_id:1, s_name:'gabagool', s_calories: 500, s_fat: 10, s_carbs:12, s_protein:20}

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('sustenance').del()
  await knex('sustenance').insert(gabagool);
};
