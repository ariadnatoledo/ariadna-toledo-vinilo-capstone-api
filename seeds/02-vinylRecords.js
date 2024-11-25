export async function seed(knex) {
    await knex("VinylRecords").del(); 
    await knex("VinylRecords").insert([
      {
        userId: 1, // Corresponds to sim
        title: "SINNAZ",
        artist: "SIM & NAP",
        label: "Isla Records",
        tradeStatus: true,
        coverImage: "/assets/vinyls/sinnaz.jpg",
        tracklist: JSON.stringify([
          "A1 - Con Sentido",
          "A2 - Con Sentido Riddim",
          "B1 - Concha Dub",
          "B2 - Taki Taki",
        ]),
        averageRating: 4.9,
        previewTrack: "/assets/previews/sinnaz-preview.mp3"

      },
      {
        userId: 2, // Corresponds to ahri
        title: "Water Seeds",
        artist: "Oro Azul",
        label: "Mood Hut",
        tradeStatus: true,
        coverImage: "/assets/vinyls/oro-azul.jpg",
        tracklist: JSON.stringify([
          "A1 - Lemuria",
          "A2 - Atlantis",
          "B1 - Mantarraya",
          "B2 - Eros",
        ]),
        averageRating: 5.0,
        previewTrack: "/assets/previews/water-seeds-preview.mp3"
      },
    ]);
  }
  