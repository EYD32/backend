/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema
  .createTable('macros', (macros) => {
      macros.increments('id')
      macros.integer('fat').unsigned()
      macros.integer('carb').unsigned()
      macros.integer('protein').unsigned()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('macros')
};
