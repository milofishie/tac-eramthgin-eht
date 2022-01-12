const {prefix} = require("../config.json");

module.exports = {
    name: 'help',
    description: 'general guide to use the bot',
    execute(message, args) {
        if (message.content.startsWith(`${prefix} help`)) {
            message.channel.send('This command is under construction.\nCommand list:\n\`meow\`: make the bot meow');
        }
    }
}