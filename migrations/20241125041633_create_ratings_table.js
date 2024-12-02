/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('Ratings', (table) => {
      table.increments('ratingId').primary(); 
      table.integer('vinylId').unsigned().notNullable()
        .references('vinylId').inTable('VinylRecords').onDelete('CASCADE'); 
      table.integer('userId').unsigned().notNullable()
        .references('userId').inTable('Users').onDelete('CASCADE'); 
      table.float('rating').notNullable().checkBetween([0, 5]);
      table.timestamp('created_at').defaultTo(knex.fn.now()); 
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('Ratings'); 
  }
  
