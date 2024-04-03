// import { Client, GatewayIntentBits } from 'discord.js';
const { Client, GatewayIntentBits } = require("discord.js")

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', message=>{
    if(message.author.bot) return;
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1]
        return message.reply({
            content: "Generating Short Url for" + url,
        })
    }
    message.reply({
        content: `Hello ${message.author.username} From Bot`
    })
})

client.login("token")

client.on('interactionCreate', (interaction)=>{
    console.log(interaction)
    interaction.reply("Pongg!!!")
})