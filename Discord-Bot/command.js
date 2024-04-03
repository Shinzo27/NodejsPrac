const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTIyNDc2NTQyMzAzMjIwNTQxNQ.Gv_RuA.JYg8BHweULT419GbHWfSyH1LElPXwfULYteYu4"
);

(async() => {
    try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1224765423032205415"), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
    console.error(error);
    }
})();