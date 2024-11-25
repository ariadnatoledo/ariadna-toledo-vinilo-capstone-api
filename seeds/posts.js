export async function seed(knex) {
    await knex("Posts").del(); 
    await knex("Posts").insert([
      {
        userId: 1, // Sim
        vinylId: 1, // SINNAZ by SIM & NAP
        content: "This is one of my favorite records that I produced. I'm open to trading it with another rare vinyl.",
        timestamp: knex.fn.now(),
      },
      {
        userId: 2, // Ahri
        vinylId: 2, // Water Seeds by Oro Azul
        content: "This vinyl showcases the finest ambient moods. I have extra copies and am open to trading for a rare pressing.",
        timestamp: knex.fn.now(),
      },
    ]);
  }
  