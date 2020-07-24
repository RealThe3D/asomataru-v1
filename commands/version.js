module.exports = {
    name: 'version',
    aliases: 'v',
    execute: async (message, args) => {
        const package = require('../package.json');
        const version = (package.version)
        message.channel.send(`I'm on version ${version}`)
    },
}