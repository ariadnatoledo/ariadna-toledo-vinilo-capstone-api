export async function seed(knex) {
    await knex("Shows").del(); 
    await knex("Shows").insert([
      {
        name: "Vinyl Fest 2024",
        date: "2024-12-10",
        location: "Los Angeles, CA",
        description: "The largest vinyl event on the West Coast.",
        imageFlyerUrl: "/assets/flyers/vinyl-fest-los-angeles.png",
        organizer: "Vinyl Enthusiasts Group",
      },
      {
        name: "Rare Finds Vinyl Market",
        date: "2024-11-25",
        location: "New York, NY",
        description: "A curated market for rare and collectible vinyl records.",
        imageFlyerUrl: "/assets/flyers/rare-finds-market.png",
        organizer: "NYC Vinyl Collective",
      },
    ]);
  }
  