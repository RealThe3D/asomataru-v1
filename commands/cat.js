const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name:'cat',
    description:'Shows a cat! UwU',
    aliases: ['meow'],
    execute: async (message) => {
    const subReddits = ["cat", "cats"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage (img)
    .setTitle (`**__Who is a good cuddly kitten!__**`)
    .setURL (`https://reddit.com/${random}`)
    .setFooter (`From r/${random}`)

    message.channel.send(embed);
    },
};