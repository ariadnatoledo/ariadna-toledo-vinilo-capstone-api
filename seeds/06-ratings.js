export async function seed(knex) {
    await knex("Ratings").del(); 
    await knex("Ratings").insert([
      {
        vinylId: 1, // Refers to the SINNAZ vinyl (owned by userId 1)
        userId: 2, // User 2 (e.g., ahri) is rating this vinyl
        rating: 5.0, 
        created_at: knex.fn.now(), 
      },
      {
        vinylId: 2, // Refers to the Water Seeds vinyl (owned by userId 2)
        userId: 1, // User 1 (e.g., s1mms1mm4) is rating this vinyl
        rating: 4.6, 
        created_at: knex.fn.now(), 
      },
    ]);
  }
  
  