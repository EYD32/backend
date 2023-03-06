/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const user =  {user_id: 1, firstName: 'Tom', lastName:'Shear', email:'ts@assemblage23.com', password: 'dissonance', fatGoal:25, carbGoal: 25, proteinGoal: 50} ;

exports.user = user;

exports.seed =  function (knex) {
  // Deletes ALL existing entries
  // await knex('user').del()
  return knex('user').insert(user);
};
