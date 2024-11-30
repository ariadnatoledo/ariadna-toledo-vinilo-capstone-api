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
    {
      title: "Crush",
      artist: "Floating Points",
      label: "Ninja Tune",
      tradeStatus: false,
      coverImage: "/assets/vinyls/floating-points-crush.jpg",
      tracklist: JSON.stringify([
        "A1 - Falaise",
        "A2 - Last Bloom",
        "B1 - Bias",
        "B2 - Environments",
      ]),
      averageRating: 4.6,
      previewTrack: "/assets/previews/floating-points-preview.mp3",
    },
    {
      title: "The SpongeBob SquarePants Movie – Music from the Movie and More…",
      artist: "Various",
      label: "Sire, Rhino Records (2)",
      tradeStatus: true,
      coverImage: "/assets/vinyls/spongebob-squarepants.jpg",
      tracklist: JSON.stringify([
        "A1 - SpongeBob SquarePants Theme",
        "A2 - SpongeBob & Patrick Confront The Psychic Wall Of Energy",
        "A3 - Just A Kid",
        "A4 - The Goofy Goober Song",
        "A5 - Prince Paul's Bubble Party",
        "A6 - Bikini Bottom",
        "A7 - The Best Day Ever",
        "A8 - They'll Soon Discover",
        "B1 - Ocean Man",
        "B2 - Under My Rock",
        "B3 - Now That We're Men",
        "B4 - Goofy Goober Rock",
        "B5 - You Better Swim",
        "B6 - The Jellyfish Song By The Jellyfish Band",
        "B7 - SpongeBob SquarePants Theme (Movie Version)",
      ]),
      averageRating: 4.5,
      previewTrack: "/assets/previews/roman-flugel-preview.mp3",
    },
    {
      title: "One Assassination Under God (Chapter 1)",
      artist: "Marilyn Manson",
      label: "Nuclear Blast Records",
      tradeStatus: true,
      coverImage: "/assets/vinyls/marylin-manson.jpg",
      tracklist: JSON.stringify([
        "AI - One Assassination Under God",
        "AII - No Funeral Without Applause",
        "AIII	- Nod If You Understand",
        "AIV - As Sick As The Secrets Within",
        "AV	- Sacrilegious",
        "BVI - Death Is Not A Costume",
        "BVII	- Meet Me In Purgatory",
        "BVIII	- Raise The Red Flag",
        "BIX	- Sacrifice Of The Mass",
      ]),
      averageRating: 4.8,
      previewTrack: "/assets/previews/rhythm-sound-preview.mp3",
    },
    {
      title: "Aghori Mhori Mei",
      artist: "The Smashing Pumpkins",
      label: "Martha's Music",
      tradeStatus: false,
      coverImage: "/assets/vinyls/the-smashing-pumpkins.jpg",
      tracklist: JSON.stringify([
        "A1	- Edin",
        "A2	- Pentagrams",
        "A3	- Sighommi",
        "A4	- Pentecost",
        "A5	- War Dreams Of Itself",
        "B1	- Who Goes There",
        "B2	- 999",
        "B3	- Goeth The Fall",
        "B4	- Sicarus",
        "B5	- Murnau",
        "C1	- Formosa",
        "D1	- Our Lady Of Sorrows",
      ]),
      averageRating: 4.7,
      previewTrack: "/assets/previews/vakula-preview.mp3",
    },
    {
      title: "Dimensions EP",
      artist: "Jeroen Search",
      label: "Sect Records",
      tradeStatus: true,
      coverImage: "/assets/vinyls/jeroen-search.jpg",
      tracklist: JSON.stringify([
        "A - Parallel Lives",
        "B1	- Section A",
        "B2	- Inverse",
      ]),
      averageRating: 4.9,
      previewTrack: "/assets/previews/theo-parrish-preview.mp3",
    },
    {
      title: "The Avalanche",
      artist: "WK7",
      label: "Power House (3)",
      tradeStatus: false,
      coverImage: "/assets/vinyls/wk7.jpg",
      tracklist: JSON.stringify([
        "A - The Avalanche (Original Mix)",
        "B1	- Higher Power (Original Mix)",
        "B2	- Higher Power (Hardcore PCK Mix)",
      ]),
      averageRating: 4.5,
      previewTrack: "/assets/previews/lawrence-preview.mp3",
    },
    {
      title: "Good Kid, M.A.A.d City",
      artist: "Kendrick Lamar",
      label: "Interscope Records",
      tradeStatus: false,
      coverImage: "/assets/vinyls/kendrick-lamar.jpg",
      tracklist: JSON.stringify([
        "1. Sherane A.K.A Master Splinter's Daughter",
        "2. Bitch, Don't Kill My Vibe",
        "3. Backseat Freestyle",
        "4. The Art Of Peer Pressure",
        "5. Money Trees",
        "6. Poetic Justice",
        "7. Good Kid",
        "8. M.A.A.d City",
        "9. Swimming Pools (Drank) (Extended Version)",
        "10. Sing About Me, I'm Dying Of Thirst",
        "11. Real",
        "12. Compton",
        "13. The Recipe",
        "14. Black Boy Fly",
        "15. Now Or Never",
      ]),
      averageRating: 4.6,
      previewTrack: "/assets/previews/ellen-allien-preview.mp3",
    },
    {
      title: "Sueños",
      artist: "Le Motel",
      label: "Maloca",
      tradeStatus: true,
      coverImage: "/assets/vinyls/le-motel.jpg",
      tracklist: JSON.stringify([
        "A1	- Sueños",
        "A2	- Love Talk Bad",
        "A3	- Libet's Delay",
        "B1	- Talking To Drums",
        "B2	- Rápido",
        "B3	- Wonteeda",
      ]),
      averageRating: 4.7,
      previewTrack: "/assets/previews/michele-preview.mp3",
    },
    {
      title: "Blue Desert",
      artist: "Jack J",
      label: "Mood Hut",
      tradeStatus: true,
      coverImage: "/assets/vinyls/jack-j.jpg",
      tracklist: JSON.stringify([
        "A1	- Wrong Again",
        "A2	- Foolish Man",
        "A3	- Red Cloud",
        "A4	- Down The Line",
        "A5	- Pink Shoes (Part I)",
        "B1	- At Last",
        "B2	- At My Door",
        "B3	- My Other Mind",
        "B4	- Falling Down A Well",
        "B5	- Born Without A Smile",
        "B6	- Pink Shoes (Part II)",
      ]),
      averageRating: 4.8,
      previewTrack: "/assets/previews/kuniyuki-preview.mp3",
    },
    {
      title: "ERAS",
      artist: "Randy Raine-Reusch, Michael Red",
      label: "Isla Records",
      tradeStatus: false,
      coverImage: "/assets/vinyls/eras.jpg",
      tracklist: JSON.stringify([
        "A1	- Between Is",
        "A2	- Five Names Of Peace",
        "A3	- Shifting Silence",
        "B4	- Inner World",
        "B5	- Unquiet Night",
        "B6	- Winter Water"
      ]),
      averageRating: 5.0,
      previewTrack: "/assets/previews/dj-healer-preview.mp3",
    },
    {
      title: "Mirror Conspiracy",
      artist: "Thievery Corporation",
      label: "ESL Music",
      tradeStatus: true,
      coverImage: "/assets/vinyls/mirror-conspiracy.jpg",
      tracklist: JSON.stringify([
        "1. Treasures",
        "2. Le Monde",
        "3. Indra",
        "4. Lebanese Blonde",
        "5. Focus on Sight",
        "6. Air Batucada",
        "7. So Com Voce",
        "8. Samba Tranquille",
        "9. Shadows Of Ourselves",
        "10. The Hong Kong Triad",
        "11. Illumination",
        "12. The Mirror Conspiracy",
        "13. Tomorrow",
      ]),
      averageRating: 4.6,
      previewTrack: "/assets/previews/mirror-conspiracy-preview.mp3",
    },
    {
      title: "Swells",
      artist: "K-Lone",
      label: "Wisdom Teeth",
      tradeStatus: true,
      coverImage: "/assets/vinyls/k-lone.jpg",
      tracklist: JSON.stringify([
        "1. Saws",
        "2. Love Me A Little",
        "3. Oddball",
        "4. Strings",
        "5. Shimmer",
        "6. With U",
        "7. Gel",
        "8. Love Is",
        "9. Volcane",
        "10. Multiply",
      ]),
      averageRating: 4.9,
      previewTrack: "/assets/previews/deepchord-preview.mp3",
    },
    {
      title: "a pool, a portal",
      artist: "Tristan Arp",
      label: "Wisdom Teeth",
      tradeStatus: true,
      coverImage: "/assets/vinyls/a-pool-a-portal.jpg", 
      tracklist: JSON.stringify([
        "A1 - a piece of silence",
        "A2 - ways of being (feat. Mabe Fratti)",
        "A3 - a pool, a portal",
        "B1 - life after humans",
        "B2 - in regrowth",
        "B3 - time dilation",
        "C1 - a scattered meaning",
        "C2 - invisible cities",
        "C3 - beneath the world staring upwards"
      ]),
      averageRating: 4.9, 
      previewTrack: "/assets/previews/a-pool-a-portal-preview.mp3",
    },
    {
      title: "For Those Of You Who Have Never (And Also Those Who Have)",
      artist: "Huerco S.",
      label: "Proibito",
      tradeStatus: true,
      coverImage: "/assets/vinyls/huerco-s.jpg",
      tracklist: JSON.stringify([
        "1. A Sea Of Love",
        "2. Lifeblood (Naïve Melody)",
        "3. Hear Me Out",
        "4. Kraanvogel",
        "5. On The Embankment",
        "6. Marked For Life",
        "7. Cubist Camouflage",
        "8. Promises Of Fertility",
        "9. The Sacred Dance",
      ]),
      averageRating: 4.8,
      previewTrack: "/assets/previews/huerco-s-preview.mp3",
    },
  ]);
}

  