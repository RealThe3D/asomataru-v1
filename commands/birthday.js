module.exports = {
    name: 'birthday',
    execute: async (message, args) => {
        const ID = "564755874736898048"; 
        const Owner = "327594208758202379";

        if (message.author.id === ID || Owner) {
            message.channel.send(`Coming soon!`);
        } else {
            return message.channel.send("DM happy birthday to SpaceLives47#0463!");
            }
        },
    }