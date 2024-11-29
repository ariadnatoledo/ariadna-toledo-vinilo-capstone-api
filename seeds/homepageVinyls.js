export async function seed(knex) {
    await knex("HomepageVinyls").del(); 
    await knex("HomepageVinyls").insert([
      {
        title: "Music Has the Right to Children",
        artist: "Boards of Canada",
        label: "Warp Records",
        tradeStatus: false,
        coverImage: "/assets/vinyls/boards-of-canada.jpg",
        tracklist: JSON.stringify([
          "A1 - Wildlife Analysis",
          "A2 - An Eagle in Your Mind",
          "B1 - Roygbiv",
          "B2 - Telephasic Workshop",
        ]),
        averageRating: 4.8,
        previewTrack: "/assets/previews/boards-preview.mp3",
      },
      {
        title: "Selected Ambient Works 85-92",
        artist: "Aphex Twin",
        label: "R&S Records",
        tradeStatus: false,
        coverImage: "/assets/vinyls/aphex-twin.jpg",
        tracklist: JSON.stringify([
          "A1 - Xtal",
          "A2 - Tha",
          "B1 - Pulsewidth",
          "B2 - Ageispolis",
        ]),
        averageRating: 4.7,
        previewTrack: "/assets/previews/aphex-preview.mp3",
      },
    ]);
  }
  