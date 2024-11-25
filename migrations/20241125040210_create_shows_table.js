/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('Shows', (table) => {
      table.increments('showId').primary(); 
      table.string('name', 255).notNullable(); 
      table.date('date').notNullable(); 
      table.string('location', 255).notNullable();
      table.text('description').notNullable(); 
      table.string('imageFlyerUrl', 255); 
      table.string('organizer', 255).notNullable(); 
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('Shows'); 
  }
  
