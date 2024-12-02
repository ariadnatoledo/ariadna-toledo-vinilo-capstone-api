/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('Messages', (table) => {
      table.increments('messageId').primary(); 
      table.integer('senderId').unsigned().notNullable()
        .references('userId').inTable('Users').onDelete('CASCADE'); 
      table.integer('receiverId').unsigned().notNullable()
        .references('userId').inTable('Users').onDelete('CASCADE'); 
      table.text('content').notNullable(); 
      table.timestamp('timestamp').defaultTo(knex.fn.now()); 
      table.boolean('readStatus').defaultTo(false); 
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('Messages'); 
  }
  