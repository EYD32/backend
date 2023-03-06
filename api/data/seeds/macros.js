/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const macros =  {id: 1, fat: 25, carb:50, protein: 25} ;

exports.macros = macros;

exports.seed =  function (knex) {
  // Deletes ALL existing entries
  // await knex('macros').del()
  return knex('macros').insert(macros);
};
