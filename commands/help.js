const {prefix} = require("../config.json");

module.exports = {
    name: 'help',
    description: 'general guide to use the bot',
    execute(message, args) {
        if (message.content.startsWith(`${prefix} help`)) {
            var m = 'This command is under construction.\n'
            m = m + 'Command list:\n';
            m = m + '\`meow\`: make ery meow\n';
            m = m + '\`say\`: make ery say what you want ery to say\n';
            m = m + '\`good {time}\`: send Erylia a good morning/afternoon/evening\n';
            message.channel.send(m);
        }
    }
}