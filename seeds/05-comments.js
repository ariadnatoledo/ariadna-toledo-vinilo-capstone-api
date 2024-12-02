export async function seed(knex) {
    await knex("Comments").del(); 
    await knex("Comments").insert([
      {
        postId: 1, 
        userId: 2, 
        content: "Absolutely agree! The production quality is outstanding.",
        timestamp: knex.fn.now(),
      },
      {
        postId: 2, 
        userId: 1, 
        content: "Such a deep and atmospheric record. A true gem!",
        timestamp: knex.fn.now(),
      },
    ]);
  }
  