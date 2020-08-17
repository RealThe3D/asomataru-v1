let rps = ["**:moyai: Rock**", "**:pencil: Paper**", "**:scissors: Scissors**"];
function random() { return `${rps[Math.floor(Math.random() * Math.floor(2))]}`;}

module.exports = {
    name: 'rps',
    aliases: 'rockpaperscissors',
    execute (message, args) {
    let choice = args.join(' ').toLowerCase();
    if(!choice) return message.reply('Specify rock, paper or scissors');
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return message.reply(`Specify rock, paper or scissors. ${choice} doesn't exist`);
    message.reply(random());
    },
};
