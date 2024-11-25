/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('Comments', (table) => {
      table.increments('commentId').primary(); 
      table.integer('postId').unsigned().notNullable()
        .references('postId').inTable('Posts').onDelete('CASCADE'); 
      table.integer('userId').unsigned().notNullable()
        .references('userId').inTable('Users').onDelete('CASCADE'); 
      table.text('content').notNullable(); 
      table.timestamp('timestamp').defaultTo(knex.fn.now()); 
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('Comments'); 
  }
  