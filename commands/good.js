const { prefix, id } = require("../config.json");

module.exports = {
    name: 'good',
    description: 'send Erylia a good morning/afternoon/evening',
    execute(message, args) {
        if (message.content.startsWith(`${prefix} good`)) {
            if (args[0] == 'morning') {
                message.channel.send(`Good morning <@${id}>`);
            }
            if (args[0] == 'afternoon') {
                message.channel.send(`Good afternoon <@${id}>`);
            }
            if (args[0] == 'evening') {
                message.channel.send(`Good evening <@${id}>`);
            }
        }
    }
}