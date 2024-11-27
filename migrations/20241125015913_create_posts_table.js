/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("Posts", (table) => {
    table.increments("postId").primary();
    table.integer("userId").unsigned().notNullable()
      .references("userId").inTable("Users").onDelete("CASCADE");
    table.text("content").notNullable();
    table.string("image").nullable(); // To store the image path
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
}
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable("Posts");
  }
