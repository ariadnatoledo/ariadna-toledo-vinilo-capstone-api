export async function seed(knex) {
  await knex("Posts").del();
  await knex("Posts").insert([
    {
      postId: 1,
      userId: 1, // Sim
      content:
        "This is one of my favorite records that I produced. I'm open to trading it with another rare vinyl.",
      image: "/assets/vinyls/sinnaz.jpg", 
      createdAt: knex.fn.now(),
    },
    {
      postId: 2,
      userId: 2, // Ahri
      content:
        "This vinyl showcases the finest ambient moods. I have extra copies and am open to trading for a rare pressing.",
      image: "/assets/vinyls/oro-azul.jpg", 
      createdAt: knex.fn.now(),
    },
  ]);
}
