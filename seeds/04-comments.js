export async function seed(knex) {
    await knex("Comments").del(); 
    await knex("Comments").insert([
      {
        postId: 1, // Refers to the post from userId 1 (sim)
        userId: 2, // User 2 is commenting (ahri)
        content: "Absolutely agree! The production quality is outstanding.",
        timestamp: knex.fn.now(),
      },
      {
        postId: 2, // Refers to the post from userId 2 (ahri)
        userId: 1, // User 1 is commenting (sim)
        content: "Such a deep and atmospheric record. A true gem!",
        timestamp: knex.fn.now(),
      },
    ]);
  }
  