/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("HomepageVinyls", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("artist").notNullable();
    table.string("label").notNullable();
    table.string("coverImage").notNullable();
    table.json("tracklist").nullable();
    table.boolean("tradeStatus").defaultTo(false);
    table.float("averageRating").defaultTo(0);
    table.string("previewTrack").nullable();
    table.timestamps(true, true); 
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("HomepageVinyls");
}
