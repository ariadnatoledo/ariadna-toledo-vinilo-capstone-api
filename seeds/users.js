export async function seed(knex) {
  await knex("Users").del();
  await knex("Users").insert([
    {
      username: "s1mms1mm4",
      email: "s1mms1mm4@gmail.com.com",
      hashedPassword: "s1mms1mm4s1mms1mm4",
      bio: "Hi, my name is sim. Producer from Montreal, Quebec.",
      avatar: "/src/assets/avatars/avatar1.jpeg",
    },
    {
      username: "ahri",
      email: "ahri@gmail.com",
      hashedPassword: "ahri93",
      bio: "Artist based in Vancouver. Huge ambient vinyl collector.",
      avatar: "/src/assets/avatars/avatar2.jpeg",
    },
  ]);
}
