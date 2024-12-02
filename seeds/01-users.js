import bcrypt from "bcrypt";

export async function seed(knex) {
  await knex("Users").del();
  const saltRounds = 10;

  await knex("Users").insert([
    {
      username: "s1mms1mm4",
      email: "s1mms1mm4@gmail.com",
      hashedPassword: await bcrypt.hash("s1mms1mm4s1mms1mm4", saltRounds),
      bio: "Hi, my name is sim. Producer from Montreal, Quebec.",
      avatar: "/assets/avatars/avatar1.jpeg",
    },
    {
      username: "ahri",
      email: "ahri@gmail.com",
      hashedPassword: await bcrypt.hash("ahri93", saltRounds),
      bio: "Artist based in Vancouver. Huge ambient vinyl collector.",
      avatar: "/assets/avatars/avatar2.jpeg",
    },
  ]);
}



