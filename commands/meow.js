const {prefix} = require("../config.json");
const client = require("../bot.js");

module.exports = {
    name: 'meow',
    description: 'make ery meow',
    execute(message, args) {
        if (message.content.startsWith(`${prefix} meow`)) {
            console.log('meow command executed');
            message.channel.send('meow');
        }
    }
}