/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("Friends", (table) => {
      table.increments("id").primary(); 
      table
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("userId")
        .inTable("Users")
        .onDelete("CASCADE");
      table
        .integer("friendId")
        .unsigned()
        .notNullable()
        .references("userId")
        .inTable("Users")
        .onDelete("CASCADE"); 
      table.timestamp("createdAt").defaultTo(knex.fn.now()); 
      table.unique(["userId", "friendId"]);
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable("Friends");
  }
  