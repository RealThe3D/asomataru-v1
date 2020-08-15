const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name:'neko',
    description:'Shows a neko!',
    aliases: ['meow'],
    execute: async (message) => {
    const subReddits = ["animegirls"]
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