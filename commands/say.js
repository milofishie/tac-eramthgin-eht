const { prefix } = require('../config.json');

module.exports = {
    name: "say",
    description: 'make ery say what you want',
    execute(message, args) {
        if (message.content.startsWith(`${prefix} say`)) {
            if (args[0]) {
                var i = 0;
                var m = "";
                while (args[i]) {
                    m = m + args[i] + ' ';
                    i++;
                    console.log(m);
                }
                message.channel.send(m);
            } else message.channel.send('please tell ery what you want ery to say');
        }
    }
}