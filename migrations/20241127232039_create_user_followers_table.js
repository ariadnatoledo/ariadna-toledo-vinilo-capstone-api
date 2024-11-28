/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("UserFollowers", (table) => {
      table.increments("id").primary(); 
      table
        .integer("followerId")
        .unsigned()
        .notNullable()
        .references("userId")
        .inTable("Users")
        .onDelete("CASCADE"); 
      table
        .integer("followedId")
        .unsigned()
        .notNullable()
        .references("userId")
        .inTable("Users")
        .onDelete("CASCADE"); 
      table.timestamp("createdAt").defaultTo(knex.fn.now()); 
      table.unique(["followerId", "followedId"]); 
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable("UserFollowers");
  }
  
