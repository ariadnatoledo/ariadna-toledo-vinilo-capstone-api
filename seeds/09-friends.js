export async function seed(knex) {
    await knex("Friends").del();
  
    await knex("Friends").insert([
      { userId: 1, friendId: 2, createdAt: knex.fn.now() }, 
      { userId: 2, friendId: 1, createdAt: knex.fn.now() }, 
    ]);
  }