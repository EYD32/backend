const { user } = require("pg/lib/defaults");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema
  .createTable('user', (user) => {
      user.increments('user_id')
      user.string('firstName').notNullable()
      user.string('lastName').notNullable
      user.string('email').notNullable().unique()
      user.string('password').notNullable()
      user.integer('fat').unsigned().defaultTo(0)
      user.integer('carb').unsigned().defaultTo(0)
      user.integer('protein').unsigned().defaultTo(0)
      user.integer('fatGoal').unsigned()
      user.integer('carbGoal').unsigned()
      user.integer('proteinGoal').unsigned()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('user')
};
