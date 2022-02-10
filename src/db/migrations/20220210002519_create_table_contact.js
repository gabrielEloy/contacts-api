/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('contacts', table => {
      table.increments('id').primary();
      table.string("name").notNull();
      table.string("email").notNull().unique();
      table.string("phone").notNull()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('contacts');
};
