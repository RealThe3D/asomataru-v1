module.exports = {
    name:'coinflip',
    description:'Flip a coin!',
    aliases: ['coin', 'cs'],
    execute (message) {
      var choices = [
        `had landed on heads!`,
        `had landed on tails!`
      ]
      var coinResult = choices[Math.floor(Math.random() * choices.length)];
      var memName = `${message.author.username}`;
    message.channel.send(memName+' '+coinResult).then().catch(console.error);
    },
};