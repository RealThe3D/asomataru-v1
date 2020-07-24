module.exports = {
    name: 'info',
    execute: async (message, args) => {
        const package = require('../package.json');
        const version = (package.version)
        const response = [
            "Hey! I'm Asomataru",
            "I am also known as Aso!",
            "Subscribe to 3DNinja54, my YouTube Channel!",
            "I am named after a friend with piano skills on Discord! Subscribe to InfinteTimeLapse!",
            `I'm currently on version ${version}.`,
            `SachiRawr is a great person!`,
            "I'm constantly being worked on!"
        ]
        message.channel.send(response);
    },
}