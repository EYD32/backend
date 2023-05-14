
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema
  .createTable('sustenance', (sustenance) => {
      sustenance.increments('s_id')
      sustenance.string('s_name').notNullable()
      sustenance.integer('s_calories').unsigned().defaultTo(0)
      sustenance.integer('s_fat').unsigned().defaultTo(0)
      sustenance.integer('s_carbs').unsigned().defaultTo(0)
      sustenance.integer('s_protein').unsigned().defaultTo(0)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) =>  {
  await knex.schema.dropTableIfExists('sustenance')
} ;
