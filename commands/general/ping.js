module.exports = {
    name: "ping",
    aliases: [ "p" ],
    permissions: [],
    enabled: true,
    cooldown: 5,
    exec: async (client, message) => {
        await message.channel.send(message.guild.language.ping_command.replace(/{ping}/g, client.ws.ping));
    }
}