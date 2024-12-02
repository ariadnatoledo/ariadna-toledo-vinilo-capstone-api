export async function seed(knex) {
    await knex("Messages").del(); 
    await knex("Messages").insert([
      {
        senderId: 1, 
        receiverId: 2,
        content: "Hey, are you interested in trading this vinyl?",
        timestamp: knex.fn.now(), 
        readStatus: false, 
      },
      {
        senderId: 2, 
        receiverId: 1, 
        content: "Absolutely, let me know what you are looking for!", 
        timestamp: knex.fn.now(), 
        readStatus: true,
      },
    ]);
  }
  