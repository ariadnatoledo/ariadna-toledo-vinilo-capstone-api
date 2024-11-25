/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('Users', (table) => {
        table.increments('userId').primary();
        table.string('username').notNullable();
        table.string('email').unique().notNullable();
        table.string('hashedPassword').notNullable();
        table.text('bio');
        table.string('avatar');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('Users');
};
