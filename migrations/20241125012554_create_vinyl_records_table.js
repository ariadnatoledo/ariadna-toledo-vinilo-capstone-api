/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('VinylRecords', (table) => {
      table.increments('vinylId').primary(); 
      table.integer('userId').unsigned().notNullable()
        .references('userId').inTable('Users').onDelete('CASCADE'); 
      table.string('title', 100).notNullable(); 
      table.string('artist', 100).notNullable(); 
      table.string('label', 100); 
      table.boolean('tradeStatus').defaultTo(false); 
      table.string('coverImage', 255); 
      table.text('tracklist'); 
      table.float('averageRating').defaultTo(0); 
      table.string("previewTrack", 255);
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export function down(knex) {
    return knex.schema.dropTable('VinylRecords'); 
  }
