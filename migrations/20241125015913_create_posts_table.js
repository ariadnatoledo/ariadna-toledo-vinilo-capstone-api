/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('Posts', (table) => {
      table.increments('postId').primary(); 
      table.integer('userId').unsigned().notNullable()
        .references('userId').inTable('Users').onDelete('CASCADE'); 
      table.integer('vinylId').unsigned().notNullable()
        .references('vinylId').inTable('VinylRecords').onDelete('CASCADE'); 
      table.text('content').notNullable(); 
      table.timestamp('timestamp').defaultTo(knex.fn.now()); 
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('Posts');
  }
