export async function seed(knex) {
    await knex("UserFollowers").del();
  
    await knex("UserFollowers").insert([
      { followerId: 1, followedId: 2 }, 
      { followerId: 2, followedId: 1 },
    ]);
  }