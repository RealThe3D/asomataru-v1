module.exports = {
    name: 'ping',
    aliases: 'pong',
    description: 'Ping!',
    execute: async (message, args) => {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. 🏓`);
    },
};