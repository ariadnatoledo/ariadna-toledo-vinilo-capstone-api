export async function seed(knex) {
    await knex("Messages").del(); 
    await knex("Messages").insert([
      {
        senderId: 1, // User 1 is sending the message (sim)
        receiverId: 2, // User 2 is receiving the message (ahri)
        content: "Hey, are you interested in trading this vinyl?",
        timestamp: knex.fn.now(), 
        readStatus: false, 
      },
      {
        senderId: 2, // User 2 is sending the message (ahri)
        receiverId: 1, // User 1 is receiving the message (sim)
        content: "Absolutely, let me know what you are looking for!", 
        timestamp: knex.fn.now(), 
        readStatus: true,
      },
    ]);
  }
  