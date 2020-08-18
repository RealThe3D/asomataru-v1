const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name:'anime',
    description:'Shows an anime girl!',
    aliases: ['animegirl','animegirls','ag','kawaii'],
    execute: async (message) => {
    const subReddits = ["awwnime"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage (img)
    .setTitle (`**__This command is much better than Aka's!__**`)
    .setURL (`https://reddit.com/${random}`)
    .setFooter (`From r/${random}`)

    message.channel.send(embed);
    },
};