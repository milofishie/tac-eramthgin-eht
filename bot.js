const fs = require('fs');
const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

client.login(config.BOT_TOKEN);

client.on('ready', () => {
    console.log("Bot is online!");
    client.user.setActivity("with Ery", {type: "PLAYING"});
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (command.args && !args.length){
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});