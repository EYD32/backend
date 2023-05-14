/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const user =  {user_id: 1, firstName: 'Tom', lastName:'Shear', email:'ts@assemblage23.com', password: '$2a$13$TagnRAzpta2Bx9Xgnwb2euHIVaUqfZpokXgy27v6sCR1jC/sg4pAi'} ;

exports.user = user;

exports.seed =  function (knex) {
  // Deletes ALL existing entries
  // await knex('user').del()
  return knex('user').insert(user);
};
