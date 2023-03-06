/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const macros = [{fat:25} , {carb:50}, {protein:25}]

exports.macros = macros

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex('macros').del()
  await knex('macros').insert(macros);
};
