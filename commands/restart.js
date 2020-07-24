module.exports = {
    name: 'restart',
    execute: async (message) => {
        const owner = "327594208758202379";
    if (message.author.id === owner) {
        message.channel.send(`Ok, ${message.author}, I'll restart....`);
        message.channel.send(`Shutting down port...`)
        setTimeout(() => {
            process.exit(0);
        }, 5000);
    } else {
        return message.channel.send("You are not able to force the bot to restart.");
        }
    },
}